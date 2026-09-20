import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p_5ng-b8w.css';
import '../../css/f/ftupkp7et.css';
import '../../css/d/d1xqf7bcz.css';
import '../../css/q/qozfjmbpa.css';
import '../../css/f/fk5ssccly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p_5ng-b8w"/><path class="ftupkp7et"/><path class="d1xqf7bcz"/><path class="qozfjmbpa"/><path class="fk5ssccly"/></g>`,
		"fallback": "streamline-freehand:money-bag",
	});
}

export default Component;
