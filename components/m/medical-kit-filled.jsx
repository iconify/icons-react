import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/okvu0ui1q.css';
import '../../css/r/rksjj97te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="okvu0ui1q"/><path class="rksjj97te"/></g>`,
		"fallback": "reicon:medical-kit-filled",
	});
}

export default Component;
