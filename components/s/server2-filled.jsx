import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf5i7bcad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kf5i7bcad"/>`,
		"fallback": "reicon:server2-filled",
	});
}

export default Component;
