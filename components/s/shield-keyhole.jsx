import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs_bt_-6o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xs_bt_-6o"/>`,
		"fallback": "gravity-ui:shield-keyhole",
	});
}

export default Component;
