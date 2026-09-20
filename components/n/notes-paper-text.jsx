import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qa-m2weme.css';
import '../../css/n/nrwtk_bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qa-m2weme"/><path class="nrwtk_bcf"/></g>`,
		"fallback": "streamline-ultimate:notes-paper-text",
	});
}

export default Component;
