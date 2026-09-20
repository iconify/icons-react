import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htt2-vb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htt2-vb-k"/>`,
		"fallback": "tabler:separator-horizontal",
	});
}

export default Component;
