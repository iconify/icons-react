import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcnfpbj7d.css';
import '../../css/p/pzl1-q55o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcnfpbj7d"/><path class="pzl1-q55o"/>`,
		"fallback": "solar:mouse-minimalistic-bold-duotone",
	});
}

export default Component;
