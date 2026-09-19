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
		"content": `<style>.iac5itbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.3 4.5l21.1 12.267v13.261L19.52 43.5L7.6 37.087V11.412Zm10.918 32.043L7.599 23.853m22.593-12.795l.026 25.485M7.6 23.853l22.592-12.795M18.406 17.75l.233 12.229m11.3-6.129l-11.3 6.129");
}
</style><path class="iac5itbvq"/>`,
		"fallback": "arcticons:subhub",
	});
}

export default Component;
