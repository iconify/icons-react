import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbo5-pbyv.css';

const viewBox = {"width":384,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbo5-pbyv"/>`,
		"fallback": "zmdi:shield-security",
	});
}

export default Component;
