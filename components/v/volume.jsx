import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3n4852oq.css';
import '../../css/o/onfml7bjf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3n4852oq"/><path class="onfml7bjf"/>`,
		"fallback": "foundation:volume",
	});
}

export default Component;
