import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q656w8_df.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q656w8_df"/>`,
		"fallback": "game-icons:water-bottle",
	});
}

export default Component;
