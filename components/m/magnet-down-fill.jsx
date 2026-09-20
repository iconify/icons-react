import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs-5p3fbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs-5p3fbx"/>`,
		"fallback": "mage:magnet-down-fill",
	});
}

export default Component;
