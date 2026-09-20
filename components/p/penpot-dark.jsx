import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwlceor8k.css';

const viewBox = {"width":261.922,"height":345.941};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwlceor8k"/>`,
		"fallback": "thesvg-color:penpot-dark",
	});
}

export default Component;
