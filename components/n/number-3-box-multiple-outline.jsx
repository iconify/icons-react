import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfp4zrbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfp4zrbfn"/>`,
		"fallback": "mdi:number-3-box-multiple-outline",
	});
}

export default Component;
