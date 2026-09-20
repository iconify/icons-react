import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqaqp2cek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pqaqp2cek"/>`,
		"fallback": "reicon:lock-keyhole-open2-filled",
	});
}

export default Component;
