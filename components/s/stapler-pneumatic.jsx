import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlp174b5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlp174b5a"/>`,
		"fallback": "game-icons:stapler-pneumatic",
	});
}

export default Component;
