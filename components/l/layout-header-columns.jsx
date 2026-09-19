import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk6b_0bjr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zk6b_0bjr"/>`,
		"fallback": "gravity-ui:layout-header-columns",
	});
}

export default Component;
