import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsxw_objg.css';
import '../../css/g/g2hg1_bnj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsxw_objg"/><path class="g2hg1_bnj"/>`,
		"fallback": "selfhst:note-mark",
	});
}

export default Component;
