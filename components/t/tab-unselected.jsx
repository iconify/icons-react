import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvdcov6gp.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvdcov6gp"/>`,
		"fallback": "zmdi:tab-unselected",
	});
}

export default Component;
