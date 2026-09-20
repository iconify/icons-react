import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xqrnecbpb.css';
import '../../css/s/s3h23vb4e.css';
import '../../css/f/fwxgtt44t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xqrnecbpb"/><path class="s3h23vb4e"/><path class="fwxgtt44t"/></g>`,
		"fallback": "streamline-freehand:shape-cube",
	});
}

export default Component;
