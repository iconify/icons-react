import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rayjzlbft.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rayjzlbft"/>`,
		"fallback": "dinkie-icons:speech-balloon-empty-small-filled",
	});
}

export default Component;
