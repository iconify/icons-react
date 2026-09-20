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
		"content": `<style>.hs7gaq0gg {
  fill: currentColor;
  d: path("M11.996 4.496a.5.5 0 0 0-1 0v2.465l-2.341-.76a.5.5 0 0 0-.31.95l2.345.762l-1.45 1.998a.5.5 0 1 0 .808.588l1.45-1.996l1.45 1.995a.5.5 0 0 0 .808-.587l-1.45-1.997l2.348-.762a.5.5 0 0 0-.309-.951l-2.349.763zM6 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="hs7gaq0gg"/>`,
		"fallback": "fluent:text-period-asterisk-20-regular",
	});
}

export default Component;
