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
		"content": `<style>.ghovbkb2m {
  fill: currentColor;
  d: path("M13.5 12.423q-.846 0-1.423-.577t-.577-1.423T12.077 9t1.423-.577T14.923 9t.577 1.423t-.577 1.423t-1.423.577m-7.808 3.193V5.23h15.616v10.385zm2.616-1h10.384q0-.672.475-1.144q.474-.472 1.14-.472V7.846q-.67 0-1.142-.474q-.473-.475-.473-1.141H8.308q0 .671-.475 1.143q-.474.472-1.14.472V13q.67 0 1.143.475q.472.474.472 1.14m-5.616 4V8.193h1v9.424h14.654v1zm4-4V6.232z");
}
</style><path class="ghovbkb2m"/>`,
		"fallback": "material-symbols-light:payments-outline-sharp",
	});
}

export default Component;
