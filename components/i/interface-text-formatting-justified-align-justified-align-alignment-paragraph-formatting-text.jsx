import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pze_dub6t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pze_dub6t"/>`,
		"fallback": "streamline:interface-text-formatting-justified-align-justified-align-alignment-paragraph-formatting-text",
	});
}

export default Component;
