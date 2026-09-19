import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xefpuv2ro.css';
import '../../css/m/mtpevtoup.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 xefpuv2ro"/><path class="clr-i-solid clr-i-solid-path-2 mtpevtoup"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:tree-solid",
	});
}

export default Component;
