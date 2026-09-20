import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/o/o-wjxl3tj.css';
import '../../css/f/flen3tbdj.css';
import '../../css/r/risxovbta.css';
import '../../css/z/z-9e2yrmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG9i8vndUf" class="n1mjunbsu"><path class="o-wjxl3tj"/></mask><g class="flen3tbdj"><path class="risxovbta"/><path mask="url(#SVG9i8vndUf)" class="z-9e2yrmd"/></g>`,
		"fallback": "quill:warning",
	});
}

export default Component;
