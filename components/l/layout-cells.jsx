import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx-n44b4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dx-n44b4k"/>`,
		"fallback": "gravity-ui:layout-cells",
	});
}

export default Component;
