import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kvsxqqgbw.css';
import '../../css/x/x9obmne9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kvsxqqgbw"/><path class="x9obmne9u"/></g>`,
		"fallback": "keyline-icons:list-sort-sharp-duotone",
	});
}

export default Component;
