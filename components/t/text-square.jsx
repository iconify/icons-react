import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiogu7bxw.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/a/abhnosf2i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eiogu7bxw"/><path class="sj71gtfbi"/><path class="abhnosf2i"/></g>`,
		"fallback": "streamline-color:text-square",
	});
}

export default Component;
