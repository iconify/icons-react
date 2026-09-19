import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq453ybdp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq453ybdp"/>`,
		"fallback": "f7:rectangle-stack-person-crop",
	});
}

export default Component;
