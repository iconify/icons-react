import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pro02ebyg.css';
import '../../css/c/cks4bwbpa.css';
import '../../css/z/zhcvwwl-j.css';
import '../../css/n/n1cqsebny.css';
import '../../css/f/fc19txi6c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGG01kFduh" class="pro02ebyg"/></defs><path class="cks4bwbpa"/><g transform="matrix(.9826 0 0 .9823 .266 1.018)" class="zhcvwwl-j"><path class="n1cqsebny"/><use href="#SVGG01kFduh"/><path class="fc19txi6c"/><use href="#SVGG01kFduh"/></g>`,
		"fallback": "openmoji:left-facing-fist-medium-skin-tone",
	});
}

export default Component;
