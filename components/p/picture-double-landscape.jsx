import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rkouylckw.css';
import '../../css/r/rjh93pysq.css';
import '../../css/s/s367ribyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rkouylckw"/><path class="rjh93pysq"/><path class="s367ribyu"/></g>`,
		"fallback": "streamline-freehand:picture-double-landscape",
	});
}

export default Component;
