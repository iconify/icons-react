import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icd4vqb7g.css';
import '../../css/d/dvcjvnb9k.css';
import '../../css/p/pmsz_tb3r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="icd4vqb7g"/><path class="dvcjvnb9k"/><path class="pmsz_tb3r"/></g>`,
		"fallback": "streamline-color:music-note-1",
	});
}

export default Component;
