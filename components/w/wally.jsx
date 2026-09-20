import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx6sgsb_c.css';
import '../../css/d/d-toxbclp.css';
import '../../css/a/agkgi1bzx.css';
import '../../css/b/b1sq9vpuu.css';
import '../../css/e/el2y2bccz.css';
import '../../css/y/yu_58jh2c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx6sgsb_c"/><path class="d-toxbclp"/><path class="agkgi1bzx"/><path class="b1sq9vpuu"/><path class="el2y2bccz"/><path class="yu_58jh2c"/>`,
		"fallback": "material-icon-theme:wally",
	});
}

export default Component;
