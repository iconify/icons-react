import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7btscqre.css';
import '../../css/r/rnzlaxb7z.css';
import '../../css/w/wmnp8k1mt.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/acn08zbab.css';
import '../../css/t/tnw9eabke.css';
import '../../css/f/f4cuztb7k.css';
import '../../css/g/gfkp7obeb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7btscqre"/><path class="rnzlaxb7z"/><path class="wmnp8k1mt"/><g class="jn8qy4bru"><path class="acn08zbab"/><path class="tnw9eabke"/><path class="f4cuztb7k"/><path class="gfkp7obeb"/></g>`,
		"fallback": "openmoji:spaghetti",
	});
}

export default Component;
