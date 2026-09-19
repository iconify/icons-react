import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnl5jcclz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pnl5jcclz"/>`,
		"fallback": "gravity-ui:layout-footer",
	});
}

export default Component;
