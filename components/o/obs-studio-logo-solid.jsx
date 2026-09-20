import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0q_up5ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n0q_up5ri"/>`,
		"fallback": "streamline-logos:obs-studio-logo-solid",
	});
}

export default Component;
