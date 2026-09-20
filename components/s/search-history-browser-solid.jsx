import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9edm8azq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o9edm8azq"/>`,
		"fallback": "streamline-flex:search-history-browser-solid",
	});
}

export default Component;
