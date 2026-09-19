import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iri646bpu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iri646bpu"/>`,
		"fallback": "game-icons:split-body",
	});
}

export default Component;
