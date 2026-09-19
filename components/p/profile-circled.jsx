import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4tanacyw.css';
import '../../css/n/nvje-_01u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4tanacyw"/><path class="nvje-_01u"/></g>`,
		"fallback": "iconoir:profile-circled",
	});
}

export default Component;
