import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4_v15wno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4_v15wno"/>`,
		"fallback": "solar:turntable-outline",
	});
}

export default Component;
