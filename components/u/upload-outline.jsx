import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wszt9mr6r.css';
import '../../css/z/zurn3powf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wszt9mr6r"/><path class="zurn3powf"/>`,
		"fallback": "basil:upload-outline",
	});
}

export default Component;
