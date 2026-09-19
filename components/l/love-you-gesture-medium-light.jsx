import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gby8jcb7u.css';
import '../../css/s/sylxgcbzq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gby8jcb7u"/><path class="sylxgcbzq"/></g>`,
		"fallback": "fluent-emoji-flat:love-you-gesture-medium-light",
	});
}

export default Component;
