import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gg6ap8bon.css';
import '../../css/h/htt84wbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gg6ap8bon"/><path class="htt84wbxr"/></g>`,
		"fallback": "streamline-sharp:location-pin-store",
	});
}

export default Component;
