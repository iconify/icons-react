import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gl40xlbpt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 1.75Q3.25 1.75 3.25 5q0 2.85 2.5 3.201V8.5q0 1.945 3.141 3.658q2.359 1.287 2.359 2.342v1.299q-2.5.351-2.5 3.201q0 3.25 3.25 3.25T15.25 19q0-2.85-2.5-3.201V14.5q0-1.055 2.359-2.342Q18.25 10.445 18.25 8.5v-.299q2.5-.351 2.5-3.201q0-3.25-3.25-3.25T14.25 5q0 2.85 2.5 3.201V8.5q0 1.055-2.359 2.342q-1.606.876-2.391 1.812q-.785-.936-2.391-1.812Q7.25 9.555 7.25 8.5v-.299Q9.75 7.85 9.75 5q0-3.25-3.25-3.25");
}
</style><path class="gl40xlbpt"/>`,
		"fallback": "uix-solid:route-alt",
	});
}

export default Component;
