import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo-y55b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bo-y55b-a"/>`,
		"fallback": "streamline-freehand:upload-brackets",
	});
}

export default Component;
