import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of-jukbpg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of-jukbpg"/>`,
		"fallback": "fluent-emoji-high-contrast:tokyo-tower",
	});
}

export default Component;
