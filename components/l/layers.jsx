import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkg7e-bcw.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkg7e-bcw"/>`,
		"fallback": "lineicons:layers",
	});
}

export default Component;
