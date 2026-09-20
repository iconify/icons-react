import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttdwrtber.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttdwrtber"/>`,
		"fallback": "streamline:interface-text-formatting-right-align-rag-paragraph-text-alignment-align-right-formatting-left",
	});
}

export default Component;
