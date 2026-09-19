import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq0jxaclv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq0jxaclv"/>`,
		"fallback": "bxs:tree-alt",
	});
}

export default Component;
