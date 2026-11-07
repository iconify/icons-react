import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olgj_vbqo.css';
import '../../css/f/f1syezbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olgj_vbqo"/><path clip-rule="evenodd" class="f1syezbfa"/>`,
		"fallback": "solar:shield-up-bold-duotone",
	});
}

export default Component;
