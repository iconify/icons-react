import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwd3hkmvj.css';
import '../../css/q/qdgs54bms.css';
import '../../css/n/nyf574b-x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cwd3hkmvj"/><path class="qdgs54bms"/><path class="nyf574b-x"/></g>`,
		"fallback": "streamline-color:share-link",
	});
}

export default Component;
