import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6ark1bdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i6ark1bdt"/>`,
		"fallback": "streamline-plump:pinwheel-solid",
	});
}

export default Component;
