import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfh34bycq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfh34bycq"/>`,
		"fallback": "keyline-icons:megaphone",
	});
}

export default Component;
