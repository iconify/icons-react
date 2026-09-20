import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umod0jr4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umod0jr4j"/>`,
		"fallback": "streamline-ultimate:layout-content",
	});
}

export default Component;
