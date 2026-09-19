import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9uac9b_p.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9uac9b_p"/>`,
		"fallback": "fa-solid:transgender",
	});
}

export default Component;
