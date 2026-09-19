import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzp-x3bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzp-x3bwj"/>`,
		"fallback": "bitcoin-icons:shield-outline",
	});
}

export default Component;
