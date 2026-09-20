import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjf_c6bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjf_c6bxe"/>`,
		"fallback": "stash:list-add",
	});
}

export default Component;
