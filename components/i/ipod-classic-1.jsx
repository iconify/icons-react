import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dehze7bnb.css';
import '../../css/v/vt902zf4p.css';
import '../../css/s/s90v7abma.css';
import '../../css/v/v-um_xb0v.css';
import '../../css/n/nzjghobdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dehze7bnb"/><path class="vt902zf4p"/><path class="s90v7abma"/><path class="v-um_xb0v"/><path class="nzjghobdu"/></g>`,
		"fallback": "streamline-cyber-color:ipod-classic-1",
	});
}

export default Component;
