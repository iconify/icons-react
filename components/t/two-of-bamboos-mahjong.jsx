import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnq96jbpo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnq96jbpo"/>`,
		"fallback": "dinkie-icons:two-of-bamboos-mahjong",
	});
}

export default Component;
