import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/icsylv55k.css';
import '../../css/j/j1s00upki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="icsylv55k"/><path class="j1s00upki"/></g>`,
		"fallback": "hugeicons:share-01",
	});
}

export default Component;
