import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wu9vfy71i.css';
import '../../css/c/cwy_i3bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wu9vfy71i"/><path class="cwy_i3bwi"/></g>`,
		"fallback": "andrsrxn:undo",
	});
}

export default Component;
