import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kl-fsgbzm.css';
import '../../css/z/zk5ijxbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kl-fsgbzm"/><path class="zk5ijxbzj"/></g>`,
		"fallback": "withicons-bauhaus:virus",
	});
}

export default Component;
