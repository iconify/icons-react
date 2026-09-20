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
		"content": `<style>.v6476tyja {
  fill: currentColor;
  d: path("m7.4 21.308l-.708-.708l6.208-6.213l3.5 3.5l5.175-5.175l.713.713l-5.888 5.883l-3.5-3.5zM4.615 20q-.69 0-1.153-.462T3 18.384V5.616q0-.691.463-1.153T4.615 4h12.77q.69 0 1.152.463T19 5.616v4.2H4v8.569q0 .23.192.423t.423.192zM4 8.815h14v-3.2q0-.23-.192-.423T17.384 5H4.616q-.231 0-.424.192T4 5.616zm0 0V5z");
}
</style><path class="v6476tyja"/>`,
		"fallback": "material-symbols-light:table-chart-view-outline",
	});
}

export default Component;
