import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpahkhnhu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpahkhnhu"/>`,
		"fallback": "fa6-regular:notdef",
	});
}

export default Component;
