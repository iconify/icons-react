import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxlkw4i9f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxlkw4i9f"/>`,
		"fallback": "dinkie-icons:seven-of-bamboos-mahjong-filled",
	});
}

export default Component;
