import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wh-3sabqg.css';
import '../../css/a/a23j18qmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wh-3sabqg"/><path class="a23j18qmt"/></g>`,
		"fallback": "streamline-freehand:safety-danger-mudslide",
	});
}

export default Component;
