import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az_vxbc1n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az_vxbc1n"/>`,
		"fallback": "f7:list-bullet-indent",
	});
}

export default Component;
