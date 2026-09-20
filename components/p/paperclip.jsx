import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9mqmko7j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9mqmko7j"/>`,
		"fallback": "pajamas:paperclip",
	});
}

export default Component;
