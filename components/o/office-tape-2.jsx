import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hnn_jcvfl.css';
import '../../css/a/aoudi8bmh.css';
import '../../css/c/cnwvl_anw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hnn_jcvfl"/><path class="aoudi8bmh"/><path class="cnwvl_anw"/></g>`,
		"fallback": "streamline-freehand:office-tape-2",
	});
}

export default Component;
