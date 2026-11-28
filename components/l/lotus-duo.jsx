import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xei1asblk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j_ufjpcsf.css';
import '../../css/p/pxwz2pbfo.css';
import '../../css/y/ycqdpsb9d.css';
import '../../css/k/kjrh62jun.css';
import '../../css/c/crqlicc0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xei1asblk"/><g class="dt0cm9dhy primary"><path class="j_ufjpcsf"/><path class="pxwz2pbfo"/><path class="ycqdpsb9d"/><path class="kjrh62jun"/><path class="crqlicc0h"/></g>`,
		"fallback": "iconaut:lotus-duo",
	});
}

export default Component;
