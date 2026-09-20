import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6-j7ubto.css';
import '../../css/n/njy7e9b_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v6-j7ubto"/><path class="njy7e9b_b"/>`,
		"fallback": "selfhst:openuem-light",
	});
}

export default Component;
