import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rabir5bvf.css';
import '../../css/w/w_8pztb7q.css';
import '../../css/l/l2epsdb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rabir5bvf"/><path class="w_8pztb7q"/><path class="l2epsdb2g"/></g>`,
		"fallback": "streamline-freehand:security-shield-settings",
	});
}

export default Component;
