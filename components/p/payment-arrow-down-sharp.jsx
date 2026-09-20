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
		"content": `<style>.aw23g5bfz {
  fill: currentColor;
  d: path("M4.02 13.385V3H20v10.385zM12 10.192q.846 0 1.423-.576Q14 9.039 14 8.192q0-.846-.577-1.423T12 6.192t-1.423.577T10 8.192t.577 1.423t1.423.577M12.02 21l3.288-3.288l-.689-.689l-2.1 2.1v-3.97H11.5v3.97l-2.1-2.1l-.688.689zm-7-8.615h1.615q0-.667-.475-1.141t-1.14-.475zm12.365 0H19v-1.616q-.671 0-1.143.475q-.472.474-.472 1.14M19 5.617V4h-1.616q0 .671.475 1.143q.475.473 1.141.473m-13.98 0q.666 0 1.14-.475q.475-.475.475-1.141H5.018z");
}
</style><path class="aw23g5bfz"/>`,
		"fallback": "material-symbols-light:payment-arrow-down-sharp",
	});
}

export default Component;
