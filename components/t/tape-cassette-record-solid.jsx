import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nws0tzb4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nws0tzb4e"/>`,
		"fallback": "streamline:tape-cassette-record-solid",
	});
}

export default Component;
