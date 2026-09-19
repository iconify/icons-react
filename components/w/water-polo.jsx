import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7_ujacyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7_ujacyv"/>`,
		"fallback": "game-icons:water-polo",
	});
}

export default Component;
