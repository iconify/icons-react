import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2mpnnbue.css';

const viewBox = {"width":1824,"height":1824};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2mpnnbue"/>`,
		"fallback": "vs:kanji-yubi",
	});
}

export default Component;
