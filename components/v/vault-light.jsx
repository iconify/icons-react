import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv2k8ptcj.css';
import '../../css/d/d9yuvfbmn.css';
import '../../css/z/z3fjvlb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv2k8ptcj"/><path class="d9yuvfbmn"/><path class="z3fjvlb1q"/>`,
		"fallback": "stash:vault-light",
	});
}

export default Component;
