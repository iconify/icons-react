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
		"content": `<style>.v5jscfbmu {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m6.8-4a.5.5 0 0 0-.497.446l-.3 2.75a.5.5 0 0 0 .51.554h.017l.047-.002a38 38 0 0 1 .733-.01c.444-.003.892.004 1.076.03a1.875 1.875 0 1 1-1.939 2.694a.5.5 0 1 0-.894.448a2.875 2.875 0 1 0 2.972-4.132c-.271-.038-.8-.043-1.22-.04q-.129 0-.246.002L9.249 7H12a.5.5 0 1 0 0-1z");
}
</style><path class="v5jscfbmu"/>`,
		"fallback": "fluent:number-circle-5-20-filled",
	});
}

export default Component;
