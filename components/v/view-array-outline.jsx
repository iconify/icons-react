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
		"content": `<style>.a3gry6c8u {
  fill: currentColor;
  d: path("M3 17.5v-11q0-.625.438-1.062T4.5 5t1.063.438T6 6.5v11q0 .625-.437 1.063T4.5 19t-1.062-.437T3 17.5M8.5 19q-.625 0-1.062-.437T7 17.5v-11q0-.625.438-1.062T8.5 5h7q.625 0 1.063.438T17 6.5v11q0 .625-.437 1.063T15.5 19zm9.5-1.5v-11q0-.625.438-1.062T19.5 5t1.063.438T21 6.5v11q0 .625-.437 1.063T19.5 19t-1.062-.437T18 17.5M9 17h6V7H9zm3-5");
}
</style><path class="a3gry6c8u"/>`,
		"fallback": "material-symbols:view-array-outline",
	});
}

export default Component;
