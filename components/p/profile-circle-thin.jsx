import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xpdosop8i.css';
import '../../css/f/f4e_v9bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xpdosop8i"/><path class="f4e_v9bvw"/></g>`,
		"fallback": "iconamoon:profile-circle-thin",
	});
}

export default Component;
