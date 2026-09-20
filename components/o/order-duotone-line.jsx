import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/n/n4vfkm94k.css';
import '../../css/c/cpglq24vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><rect class="n4vfkm94k"/><path class="cpglq24vf"/></g>`,
		"fallback": "lets-icons:order-duotone-line",
	});
}

export default Component;
