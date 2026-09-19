import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb-8p7lsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb-8p7lsz"/>`,
		"fallback": "game-icons:metronome",
	});
}

export default Component;
