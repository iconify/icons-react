import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpkyes8mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bpkyes8mm"/>`,
		"fallback": "solar:upload-outline",
	});
}

export default Component;
