import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj3h9ft4y.css';
import '../../css/d/d2x1331fj.css';
import '../../css/u/uii4avzkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj3h9ft4y"/><circle class="d2x1331fj"/><circle class="uii4avzkv"/>`,
		"fallback": "typcn:shopping-cart",
	});
}

export default Component;
