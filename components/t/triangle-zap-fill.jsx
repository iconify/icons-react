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
		"content": `<style>.uk42akbpq {
  fill: currentColor;
  d: path("m14.591 4.488l7 12A2.999 2.999 0 0 1 19 21H5a2.999 2.999 0 0 1-2.591-4.512l7-12a3 3 0 0 1 5.182 0M12.414 13l1.293-1.293a.999.999 0 1 0-1.414-1.414l-3 3A1 1 0 0 0 10 15h1.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3A1 1 0 0 0 14 13Z");
}
</style><path class="uk42akbpq"/>`,
		"fallback": "coolicons:triangle-zap-fill",
	});
}

export default Component;
