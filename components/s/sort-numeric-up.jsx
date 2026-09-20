import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er_tio5vc.css';
import '../../css/g/gwgon2blw.css';
import '../../css/d/dn4_b_blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er_tio5vc"/><path class="gwgon2blw"/><path class="dn4_b_blc"/>`,
		"fallback": "prime:sort-numeric-up",
	});
}

export default Component;
