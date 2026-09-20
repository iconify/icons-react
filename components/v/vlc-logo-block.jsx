import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v13-n1bhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v13-n1bhp"/>`,
		"fallback": "streamline-logos:vlc-logo-block",
	});
}

export default Component;
