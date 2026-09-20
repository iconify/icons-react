import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3f8ptgvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3f8ptgvx"/>`,
		"fallback": "tabler:layout",
	});
}

export default Component;
