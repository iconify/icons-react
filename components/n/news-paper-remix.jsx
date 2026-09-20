import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu-l12apa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cu-l12apa"/>`,
		"fallback": "streamline-flex:news-paper-remix",
	});
}

export default Component;
