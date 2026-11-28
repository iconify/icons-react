import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkk9n5bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkk9n5bpf primary"/>`,
		"fallback": "iconaut:phone-off-duotone",
	});
}

export default Component;
