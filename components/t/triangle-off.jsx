import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu3ddzb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu3ddzb3l"/>`,
		"fallback": "tabler:triangle-off",
	});
}

export default Component;
