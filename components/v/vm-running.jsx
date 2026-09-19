import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz8te_bpd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wz8te_bpd"/>`,
		"fallback": "codicon:vm-running",
	});
}

export default Component;
