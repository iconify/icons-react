import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytsqaqbxb.css';
import '../../css/y/y4cyulhsa.css';
import '../../css/s/snt_cnzej.css';
import '../../css/v/vu2rk5hjo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytsqaqbxb"/><circle class="y4cyulhsa"/><path class="snt_cnzej"/><path class="vu2rk5hjo"/>`,
		"fallback": "ion:md-medal",
	});
}

export default Component;
