import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwe1n2brt.css';
import '../../css/g/g_zd9bbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwe1n2brt"/><path class="g_zd9bbjb"/>`,
		"fallback": "tdesign:location-parking-place-filled",
	});
}

export default Component;
