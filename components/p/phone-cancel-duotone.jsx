import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fujx5-waz.css';
import '../../css/y/ycjbrccha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fujx5-waz"/><path class="ycjbrccha"/></g>`,
		"fallback": "reicon:phone-cancel-duotone",
	});
}

export default Component;
