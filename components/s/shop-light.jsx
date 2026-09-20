import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/smffg765a.css';
import '../../css/w/w7q8b6bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="smffg765a"/><path class="w7q8b6bof"/></g>`,
		"fallback": "lets-icons:shop-light",
	});
}

export default Component;
