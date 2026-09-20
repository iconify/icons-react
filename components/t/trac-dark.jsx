import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc71_yuqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc71_yuqx"/>`,
		"fallback": "selfhst:trac-dark",
	});
}

export default Component;
