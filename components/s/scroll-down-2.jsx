import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok-5cd9qq.css';
import '../../css/t/tjtae605g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok-5cd9qq"/><path clip-rule="evenodd" class="tjtae605g"/>`,
		"fallback": "lineicons:scroll-down-2",
	});
}

export default Component;
