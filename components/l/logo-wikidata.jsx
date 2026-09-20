import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngl7jtepb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngl7jtepb"/>`,
		"fallback": "ooui:logo-wikidata",
	});
}

export default Component;
