import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/up-ebhb1o.css';
import '../../css/o/owcvm8w3s.css';
import '../../css/j/jfwulbcfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="up-ebhb1o"/><path class="owcvm8w3s"/><path clip-rule="evenodd" class="jfwulbcfu"/></g>`,
		"fallback": "streamline-sharp-color:watch-square-time-flat",
	});
}

export default Component;
