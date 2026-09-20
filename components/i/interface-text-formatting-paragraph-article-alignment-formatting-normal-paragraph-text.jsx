import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si2ppcpkz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si2ppcpkz"/>`,
		"fallback": "streamline:interface-text-formatting-paragraph-article-alignment-formatting-normal-paragraph-text",
	});
}

export default Component;
