import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_6i2cbcn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_6i2cbcn"/>`,
		"fallback": "gravity-ui:layout-columns-3",
	});
}

export default Component;
