import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgpgm4bxi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgpgm4bxi"/>`,
		"fallback": "la:speaker-deck",
	});
}

export default Component;
