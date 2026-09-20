import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3g3o-fjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3g3o-fjt"/>`,
		"fallback": "uis:star",
	});
}

export default Component;
