import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igfmh4bqz.css';
import '../../css/n/ncx9dsoaj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="igfmh4bqz"/><path class="ncx9dsoaj"/></g>`,
		"fallback": "fluent-emoji-flat:orthodox-cross",
	});
}

export default Component;
