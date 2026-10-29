import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_d5id95k.css';
import '../../css/z/zs3wyi-vt.css';
import '../../css/b/blx--hbxp.css';
import '../../css/v/v6k2dquwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_d5id95k wm-a"/><path class="wm-k zs3wyi-vt"/><path class="blx--hbxp wm-k"/><path class="v6k2dquwv wm-k"/>`,
		"fallback": "withicons-bauhaus:sun-moon",
	});
}

export default Component;
