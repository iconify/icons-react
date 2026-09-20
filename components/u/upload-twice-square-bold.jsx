import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxf_lxb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxf_lxb5g"/>`,
		"fallback": "solar:upload-twice-square-bold",
	});
}

export default Component;
