import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u7upx2b1f.css';
import '../../css/t/t_rua5b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u7upx2b1f"/><path class="t_rua5b8r"/></g>`,
		"fallback": "hugeicons:push-up-bar",
	});
}

export default Component;
