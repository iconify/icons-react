import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bde-fkg2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bde-fkg2t"/>`,
		"fallback": "streamline-freehand:safety-911-call",
	});
}

export default Component;
