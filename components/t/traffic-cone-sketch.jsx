import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kqdo--dgf.css';
import '../../css/w/wa-qt0b0c.css';
import '../../css/v/vpv0a08iy.css';
import '../../css/s/syp98vb4f.css';
import '../../css/f/foz_ombwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kqdo--dgf"/><path class="wa-qt0b0c wm-k"/><path class="vpv0a08iy wm-k"/><path class="syp98vb4f wm-k"/><path class="foz_ombwu wm-a"/></g>`,
		"fallback": "withicons:traffic-cone-sketch",
	});
}

export default Component;
