import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjndzv7wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjndzv7wa"/>`,
		"fallback": "solar:panel-top-outline",
	});
}

export default Component;
