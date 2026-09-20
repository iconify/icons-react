import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sjniipb-f.css';
import '../../css/x/xejfo7bwe.css';
import '../../css/z/zia3czbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sjniipb-f"/><path class="xejfo7bwe"/><path class="zia3czbog"/></g>`,
		"fallback": "solar:paint-brush-bold",
	});
}

export default Component;
