import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-mq5-bzt.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-mq5-bzt"/>`,
		"fallback": "fa6-solid:mobile-button",
	});
}

export default Component;
