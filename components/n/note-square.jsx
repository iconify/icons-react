import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rm0sgyb_u.css';
import '../../css/a/a_kcwxb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rm0sgyb_u"/><path class="a_kcwxb5c"/></g>`,
		"fallback": "reicon:note-square",
	});
}

export default Component;
