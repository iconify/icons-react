import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdz5pm-xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wdz5pm-xw"/>`,
		"fallback": "streamline-logos:reason-studios-logo-block",
	});
}

export default Component;
