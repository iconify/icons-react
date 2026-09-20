import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vky8wwlcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vky8wwlcb"/>`,
		"fallback": "streamline-logos:nomad-list-logo-block",
	});
}

export default Component;
