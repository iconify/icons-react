import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s_o--o2km.css';
import '../../css/x/xaw0nda2s.css';
import '../../css/f/fsfedvbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="s_o--o2km"/><path class="xaw0nda2s"/><path class="fsfedvbef"/></g>`,
		"fallback": "iconamoon:lock",
	});
}

export default Component;
