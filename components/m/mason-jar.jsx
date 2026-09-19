import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/artxnr_oz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="artxnr_oz"/>`,
		"fallback": "game-icons:mason-jar",
	});
}

export default Component;
