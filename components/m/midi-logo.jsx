import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3z1kovqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3z1kovqy"/>`,
		"fallback": "streamline-logos:midi-logo",
	});
}

export default Component;
