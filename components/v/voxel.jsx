import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed58ot-_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed58ot-_y"/>`,
		"fallback": "token:voxel",
	});
}

export default Component;
