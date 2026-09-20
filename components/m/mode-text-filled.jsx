import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1930tbml.css';
import '../../css/w/wqxo31blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1930tbml"/><path class="wqxo31blv"/>`,
		"fallback": "tdesign:mode-text-filled",
	});
}

export default Component;
