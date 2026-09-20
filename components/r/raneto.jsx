import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaapy-bnd.css';
import '../../css/z/zl8qabcpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaapy-bnd"/><path class="zl8qabcpl"/>`,
		"fallback": "selfhst:raneto",
	});
}

export default Component;
