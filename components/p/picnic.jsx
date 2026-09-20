import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovy1l4bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovy1l4bpv"/>`,
		"fallback": "thesvg-color:picnic",
	});
}

export default Component;
