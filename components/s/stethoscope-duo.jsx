import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9rwhn5xj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ta6211bvx.css';
import '../../css/m/m53qvnbuy.css';
import '../../css/u/u4et_3yps.css';
import '../../css/x/x5vqjc9kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary u9rwhn5xj"/><g class="dt0cm9dhy primary"><path class="ta6211bvx"/><path class="m53qvnbuy"/><path class="u4et_3yps"/><path class="x5vqjc9kw"/></g>`,
		"fallback": "iconaut:stethoscope-duo",
	});
}

export default Component;
