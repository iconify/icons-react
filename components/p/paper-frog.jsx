import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9u55vzlg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9u55vzlg"/>`,
		"fallback": "game-icons:paper-frog",
	});
}

export default Component;
