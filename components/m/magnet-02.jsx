import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr4hadbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr4hadbqv"/>`,
		"fallback": "hugeicons:magnet-02",
	});
}

export default Component;
