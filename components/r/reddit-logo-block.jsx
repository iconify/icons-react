import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abe0kqbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abe0kqbeb"/>`,
		"fallback": "streamline-logos:reddit-logo-block",
	});
}

export default Component;
