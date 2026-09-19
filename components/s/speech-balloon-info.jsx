import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r02q42ccy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r02q42ccy"/>`,
		"fallback": "dinkie-icons:speech-balloon-info",
	});
}

export default Component;
