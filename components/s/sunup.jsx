import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nrpn-tz7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.411 5.401L29.68 3.258c16.053 6.026 17.158 17.787 13.91 28.884c-3.586 1.186-6.51 1.073-9.947 1.025c-6.982-.594-13.938-1.624-20.975-2.463l-8.593-.102c-.778-1.597-.801-2.274-.923-3.072l12.3-.513l17.458-1.949l9.337-2.151l-15.968 1.333l-20.299-.206l-2.977-.103c-.044-3.559.655-6.942 2.382-10.027l12.991-.642l-11.611-1.691c1.516-2.22 3.288-4.507 6.685-6.198zm-1.082 35.956c11.245 6.753 18.54 2.734 25.847-1.773z");
}
</style><path class="nrpn-tz7n"/>`,
		"fallback": "arcticons:sunup",
	});
}

export default Component;
