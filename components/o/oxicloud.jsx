import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwr2epb-t.css';
import '../../css/s/swf58-3sr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vwr2epb-t"/><path class="swf58-3sr"/>`,
		"fallback": "selfhst:oxicloud",
	});
}

export default Component;
