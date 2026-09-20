import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fzp8jbboz.css';
import '../../css/h/hd9-xvbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fzp8jbboz"/><path class="hd9-xvbxo"/></g>`,
		"fallback": "streamline-sharp-color:pictures-folder-memories-flat",
	});
}

export default Component;
