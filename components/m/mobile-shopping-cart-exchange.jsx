import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u3k78mbvt.css';
import '../../css/x/xmdm0mbrl.css';
import '../../css/g/gqua3wb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u3k78mbvt"/><path class="xmdm0mbrl"/><path class="gqua3wb5g"/></g>`,
		"fallback": "streamline-ultimate:mobile-shopping-cart-exchange",
	});
}

export default Component;
