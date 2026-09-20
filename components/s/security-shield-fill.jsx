import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxy4-i9_f.css';
import '../../css/t/tbnr6-0gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxy4-i9_f"/><path class="tbnr6-0gf"/>`,
		"fallback": "mage:security-shield-fill",
	});
}

export default Component;
