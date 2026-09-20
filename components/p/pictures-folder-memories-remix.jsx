import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8u6lgacq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d8u6lgacq"/>`,
		"fallback": "streamline-flex:pictures-folder-memories-remix",
	});
}

export default Component;
