import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljvk73k3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljvk73k3j"/>`,
		"fallback": "akar-icons:sort",
	});
}

export default Component;
