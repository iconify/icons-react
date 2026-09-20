import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zv5_28bpu.css';
import '../../css/p/psuj1nblp.css';
import '../../css/f/fq3jvebqs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zv5_28bpu"/><rect transform="rotate(-45 7.499 4.294)" class="psuj1nblp"/><path class="fq3jvebqs"/></g>`,
		"fallback": "streamline:legal-justice-hammer-hammer-work-legal-mallet-office-company-gavel-justice-judge-arbitration-court",
	});
}

export default Component;
