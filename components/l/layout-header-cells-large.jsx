import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiha4dbwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yiha4dbwx"/>`,
		"fallback": "gravity-ui:layout-header-cells-large",
	});
}

export default Component;
