import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtp73sc4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mtp73sc4j"/>`,
		"fallback": "streamline-logos:netflix-logo-block",
	});
}

export default Component;
