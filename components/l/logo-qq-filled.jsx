import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgxo9gb5x.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgxo9gb5x"/>`,
		"fallback": "tdesign:logo-qq-filled",
	});
}

export default Component;
