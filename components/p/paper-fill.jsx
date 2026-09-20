import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4_kvqb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r4_kvqb0d"/>`,
		"fallback": "lets-icons:paper-fill",
	});
}

export default Component;
