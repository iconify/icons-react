import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opoqdejcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="opoqdejcs"/>`,
		"fallback": "streamline-plump:lightning-cloud-solid",
	});
}

export default Component;
