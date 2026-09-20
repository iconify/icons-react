import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw8v8rm4n.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/w4bsiacjh.css';
import '../../css/z/z7me5tbpt.css';
import '../../css/g/gznd2dtud.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw8v8rm4n"/><g class="jn8qy4bru"><path class="w4bsiacjh"/><path class="z7me5tbpt"/></g><path class="gznd2dtud"/>`,
		"fallback": "openmoji:mahjong-red-dragon",
	});
}

export default Component;
