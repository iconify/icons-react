import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxnf2qx1t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxnf2qx1t"/>`,
		"fallback": "gravity-ui:shield-exclamation",
	});
}

export default Component;
