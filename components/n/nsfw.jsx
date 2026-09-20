import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkxm5ccrh.css';
import '../../css/v/vsj2klbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkxm5ccrh"/><path class="vsj2klbek"/>`,
		"fallback": "token:nsfw",
	});
}

export default Component;
