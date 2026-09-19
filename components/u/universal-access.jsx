import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0-8awbkj.css';
import '../../css/i/iuy23obtc.css';
import '../../css/v/vq0zclbxc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k0-8awbkj"/><path class="iuy23obtc"/><path clip-rule="evenodd" class="vq0zclbxc"/></g>`,
		"fallback": "gravity-ui:universal-access",
	});
}

export default Component;
