import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rmzlaacmz.css';
import '../../css/u/uc0ced3xe.css';
import '../../css/y/yt_spx0-o.css';
import '../../css/f/fjf51v-lh.css';
import '../../css/e/elx-v3mgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rmzlaacmz"/><path class="uc0ced3xe"/><path class="yt_spx0-o"/><path class="fjf51v-lh"/><path class="elx-v3mgm"/></g>`,
		"fallback": "streamline-freehand-color:saving-money-seedling",
	});
}

export default Component;
