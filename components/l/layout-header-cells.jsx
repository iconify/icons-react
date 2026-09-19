import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz7cuwb4u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vz7cuwb4u"/>`,
		"fallback": "gravity-ui:layout-header-cells",
	});
}

export default Component;
