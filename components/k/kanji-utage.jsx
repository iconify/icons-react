import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9xvnhbhn.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9xvnhbhn"/>`,
		"fallback": "vs:kanji-utage",
	});
}

export default Component;
