import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-3_bibib.css';
import '../../css/w/w_5heldpj.css';
import '../../css/i/iwf9cnu_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z-3_bibib"/><path class="w_5heldpj"/><path class="iwf9cnu_o"/></g>`,
		"fallback": "reicon:message-edit",
	});
}

export default Component;
