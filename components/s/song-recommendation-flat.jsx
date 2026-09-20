import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p-5df264k.css';
import '../../css/q/qivbxcbko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p-5df264k"/><path class="qivbxcbko"/></g>`,
		"fallback": "streamline-color:song-recommendation-flat",
	});
}

export default Component;
