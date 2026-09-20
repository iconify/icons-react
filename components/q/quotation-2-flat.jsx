import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qazrfyd2l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qazrfyd2l"/>`,
		"fallback": "streamline-plump-color:quotation-2-flat",
	});
}

export default Component;
