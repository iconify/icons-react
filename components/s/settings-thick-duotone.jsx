import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6jgc5b_g.css';
import '../../css/h/hllvxmbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f6jgc5b_g"/><path class="hllvxmbbi"/>`,
		"fallback": "si:settings-thick-duotone",
	});
}

export default Component;
