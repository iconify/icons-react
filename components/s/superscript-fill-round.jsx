import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my5tmi8qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my5tmi8qa"/>`,
		"fallback": "coolicons:superscript-fill-round",
	});
}

export default Component;
