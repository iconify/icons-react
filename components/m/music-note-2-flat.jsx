import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-m_vqxss.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s-m_vqxss"/>`,
		"fallback": "streamline-color:music-note-2-flat",
	});
}

export default Component;
