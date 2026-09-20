import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j6u8hyefq {
  d: path("M15.499 9.134a1 1 0 0 1 0 1.732l-10 5.769A1 1 0 0 1 4 15.769V4.23a1 1 0 0 1 1.5-.866z");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.nq6ygfb3o {
  d: path("M5.5 16.635a1 1 0 0 1-1.5-.866V4.23a1 1 0 0 1 1.5-.866l9.999 5.769a1 1 0 0 1 0 1.732zM10.997 10L7 7.694v4.612z");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="j6u8hyefq"/><path class="nq6ygfb3o"/></g>`,
		"fallback": "pepicons-pop:triangle-right-filled",
	});
}

export default Component;
