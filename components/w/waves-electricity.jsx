import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfh1tlbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfh1tlbyc"/>`,
		"fallback": "tabler:waves-electricity",
	});
}

export default Component;
