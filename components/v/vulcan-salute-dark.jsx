import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7f6xpb6p.css';
import '../../css/y/y2_6spueg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7f6xpb6p"/><path class="y2_6spueg"/></g>`,
		"fallback": "fluent-emoji-flat:vulcan-salute-dark",
	});
}

export default Component;
