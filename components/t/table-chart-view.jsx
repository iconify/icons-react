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
		"content": `<style>.k8jf37b2s {
  fill: currentColor;
  d: path("m7.4 21.308l-.708-.708l6.208-6.213l3.5 3.5l5.175-5.175l.713.713l-5.888 5.883l-3.5-3.5zM4.615 20q-.69 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h12.77q.69 0 1.152.463T19 5.616v4.2H4v8.569q0 .23.192.423t.423.192z");
}
</style><path class="k8jf37b2s"/>`,
		"fallback": "material-symbols-light:table-chart-view",
	});
}

export default Component;
