import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmxa-zovd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmxa-zovd"/>`,
		"fallback": "fa7-solid:spider",
	});
}

export default Component;
