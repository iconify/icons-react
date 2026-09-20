import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9tpj7yxw.css';
import '../../css/y/y2u78xbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9tpj7yxw"/><path clip-rule="evenodd" class="y2u78xbvn"/></g>`,
		"fallback": "streamline-sharp-color:refrigerator-flat",
	});
}

export default Component;
