import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhb8c01ug.css';
import '../../css/r/rirt7bcol.css';
import '../../css/m/mzxbszjzr.css';
import '../../css/d/dmlxnibql.css';
import '../../css/r/ryby98ucd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hhb8c01ug"><path class="rirt7bcol"/><path class="mzxbszjzr"/><path class="dmlxnibql"/><path class="ryby98ucd"/></g>`,
		"fallback": "catppuccin:postcss",
	});
}

export default Component;
