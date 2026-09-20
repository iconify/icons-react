import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n1tta3b2f.css';
import '../../css/n/navgebbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="n1tta3b2f"/><path class="navgebbwx"/></g>`,
		"fallback": "reicon:square-plus",
	});
}

export default Component;
