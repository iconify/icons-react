import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zswnnbbfi.css';
import '../../css/x/x_86hcbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zswnnbbfi"/><path class="x_86hcbkf"/></g>`,
		"fallback": "streamline-freehand:lock-cancel-slash",
	});
}

export default Component;
