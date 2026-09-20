import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1hw_fahx.css';
import '../../css/y/yzx_6mbal.css';
import '../../css/y/yq95d_b5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c1hw_fahx"/><path class="yzx_6mbal"/><path class="yq95d_b5w"/></g>`,
		"fallback": "streamline-kameleon-color:transfer-cloud-duo",
	});
}

export default Component;
