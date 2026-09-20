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
		"content": `<style>.h3yycl2mn {
  fill: currentColor;
  d: path("M2.692 18.616V8.192h1v9.424h14.654v1zm3-3V5.23h15.616v10.385zm2.616-1q0-.667-.475-1.141T6.693 13v1.616zm10.384 0h1.616V13q-.671 0-1.143.475q-.473.474-.473 1.14M13.5 12.424q.846 0 1.423-.577t.577-1.423T14.923 9T13.5 8.423T12.077 9t-.577 1.423t.577 1.423t1.423.577M6.692 7.846q.667 0 1.141-.474q.475-.475.475-1.141H6.692zm13.616 0V6.231h-1.616q0 .671.475 1.143q.474.472 1.14.472");
}
</style><path class="h3yycl2mn"/>`,
		"fallback": "material-symbols-light:payments-sharp",
	});
}

export default Component;
