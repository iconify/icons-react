import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o90uxgbfv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o90uxgbfv"/>`,
		"fallback": "streamline-flex:rectangle-split-thirds-remix",
	});
}

export default Component;
