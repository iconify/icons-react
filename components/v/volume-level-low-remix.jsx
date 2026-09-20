import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe8fokbtt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xe8fokbtt"/>`,
		"fallback": "streamline:volume-level-low-remix",
	});
}

export default Component;
