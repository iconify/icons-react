import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv33-qbvu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uv33-qbvu"/>`,
		"fallback": "gravity-ui:layout-header-cells-large-letter-d",
	});
}

export default Component;
