import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frrc-qxwg.css';
import '../../css/h/hce5i4bzx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frrc-qxwg"/><path class="hce5i4bzx"/>`,
		"fallback": "energy-icons:warming-stripes-20",
	});
}

export default Component;
