import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6bv3cbvb.css';
import '../../css/u/uy6molruc.css';
import '../../css/e/efjg-jbol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6bv3cbvb"/><path class="uy6molruc"/><path class="efjg-jbol"/>`,
		"fallback": "selfhst:reitti",
	});
}

export default Component;
