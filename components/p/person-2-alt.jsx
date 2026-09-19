import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk4bebj_f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk4bebj_f"/>`,
		"fallback": "f7:person-2-alt",
	});
}

export default Component;
