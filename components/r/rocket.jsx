import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxobl-b0u.css';
import '../../css/p/p42897ycd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxobl-b0u"/><path class="p42897ycd"/>`,
		"fallback": "boxicons:rocket",
	});
}

export default Component;
