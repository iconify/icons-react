import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmfj0ubqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qmfj0ubqw"/>`,
		"fallback": "solar:table-properties-outline",
	});
}

export default Component;
