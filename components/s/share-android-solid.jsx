import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y_hai8bkm.css';
import '../../css/h/haa-m_w9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y_hai8bkm"/><path class="haa-m_w9p"/></g>`,
		"fallback": "iconoir:share-android-solid",
	});
}

export default Component;
