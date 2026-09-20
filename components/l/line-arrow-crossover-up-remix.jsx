import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcryt8kkv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tcryt8kkv"/>`,
		"fallback": "streamline:line-arrow-crossover-up-remix",
	});
}

export default Component;
