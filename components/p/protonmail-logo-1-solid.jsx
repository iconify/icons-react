import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mht6kb53d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mht6kb53d"/>`,
		"fallback": "streamline-logos:protonmail-logo-1-solid",
	});
}

export default Component;
