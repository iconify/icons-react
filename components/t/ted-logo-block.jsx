import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0u518u-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s0u518u-d"/>`,
		"fallback": "streamline-logos:ted-logo-block",
	});
}

export default Component;
