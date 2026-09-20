import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opnjybc5u.css';
import '../../css/a/afp1jxb0a.css';
import '../../css/k/klb71kbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opnjybc5u"/><path class="afp1jxb0a"/><path clip-rule="evenodd" class="klb71kbpe"/>`,
		"fallback": "streamline-freehand:video-file-camera",
	});
}

export default Component;
