import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc3yz6byc.css';
import '../../css/z/zdd0vz74c.css';
import '../../css/h/hz-xq7bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc3yz6byc"/><path class="zdd0vz74c"/><path class="hz-xq7bsf"/>`,
		"fallback": "bxl:jwt",
	});
}

export default Component;
