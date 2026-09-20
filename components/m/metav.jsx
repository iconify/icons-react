import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss2xjkb3d.css';
import '../../css/n/n_iamfbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ss2xjkb3d"/><path class="n_iamfbpj"/>`,
		"fallback": "token:metav",
	});
}

export default Component;
