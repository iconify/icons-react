import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz9uk5bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz9uk5bnk"/>`,
		"fallback": "tabler:play-card-7-filled",
	});
}

export default Component;
