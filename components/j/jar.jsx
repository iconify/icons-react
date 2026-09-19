import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btv2d0blc.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btv2d0blc"/>`,
		"fallback": "fa6-solid:jar",
	});
}

export default Component;
