import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh9iygkio.css';
import '../../css/n/ncs9kybml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh9iygkio"/><path class="ncs9kybml"/>`,
		"fallback": "token:rbd",
	});
}

export default Component;
