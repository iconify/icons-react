import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cae64xtfz.css';
import '../../css/b/bcnwz-bql.css';
import '../../css/c/ctaobdbfw.css';
import '../../css/m/mqfx5dq5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cae64xtfz"/><path class="bcnwz-bql wm-a"/><path class="ctaobdbfw"/><path class="mqfx5dq5o wm-a"/></g>`,
		"fallback": "withicons:notebook-duo",
	});
}

export default Component;
