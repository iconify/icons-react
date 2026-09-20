import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is_njbszx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="is_njbszx"/>`,
		"fallback": "streamline-flex:music-note-circle-solid",
	});
}

export default Component;
