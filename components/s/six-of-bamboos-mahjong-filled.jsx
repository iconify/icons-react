import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrob_ccbk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrob_ccbk"/>`,
		"fallback": "dinkie-icons:six-of-bamboos-mahjong-filled",
	});
}

export default Component;
