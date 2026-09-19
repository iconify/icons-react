import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o79dnnrab.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o79dnnrab"/>`,
		"fallback": "gravity-ui:logo-windows",
	});
}

export default Component;
