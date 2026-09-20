import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4xr0yhpn.css';
import '../../css/w/wxkzprrkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4xr0yhpn"/><path class="wxkzprrkg"/>`,
		"fallback": "tdesign:logo-adobe-illustrate-filled",
	});
}

export default Component;
