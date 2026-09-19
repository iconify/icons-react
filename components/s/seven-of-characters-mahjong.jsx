import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbqeu9bou.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbqeu9bou"/>`,
		"fallback": "dinkie-icons:seven-of-characters-mahjong",
	});
}

export default Component;
