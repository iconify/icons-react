import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3d68xb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3d68xb1e"/>`,
		"fallback": "coolicons:square-dashed-check-duotone-round",
	});
}

export default Component;
