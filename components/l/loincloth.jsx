import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpkb9b92l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpkb9b92l"/>`,
		"fallback": "game-icons:loincloth",
	});
}

export default Component;
