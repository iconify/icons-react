import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ieip_rbon.css';
import '../../css/y/ywjju2spm.css';
import '../../css/l/lul5q3f-j.css';
import '../../css/j/j5ajr9amr.css';
import '../../css/n/ntln6abet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ieip_rbon"/><path class="ywjju2spm"/><path class="lul5q3f-j"/><path class="j5ajr9amr"/><path class="ntln6abet"/></g>`,
		"fallback": "streamline-ultimate-color:notes-checklist-flip",
	});
}

export default Component;
