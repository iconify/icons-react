import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl4umccal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl4umccal"/>`,
		"fallback": "fa6-solid:right-to-bracket",
	});
}

export default Component;
