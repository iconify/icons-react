import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8lk1hb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8lk1hb2v"/>`,
		"fallback": "nrk:music-note",
	});
}

export default Component;
