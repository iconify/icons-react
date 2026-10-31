import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgmo6izin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgmo6izin"/>`,
		"fallback": "coolicons:wallet-fill-round",
	});
}

export default Component;
