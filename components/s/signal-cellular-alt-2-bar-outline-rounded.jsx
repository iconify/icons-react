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
		"content": `<style>.lkd1vrm9g {
  fill: currentColor;
  d: path("M5.438 19.563Q5 19.125 5 18.5v-3q0-.625.438-1.062T6.5 14t1.063.438T8 15.5v3q0 .625-.437 1.063T6.5 20t-1.062-.437m6 0Q11 19.125 11 18.5v-8q0-.625.438-1.062T12.5 9t1.063.438T14 10.5v8q0 .625-.437 1.063T12.5 20t-1.062-.437");
}
</style><path class="lkd1vrm9g"/>`,
		"fallback": "material-symbols:signal-cellular-alt-2-bar-outline-rounded",
	});
}

export default Component;
