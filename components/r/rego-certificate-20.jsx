import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiwpj83ce.css';
import '../../css/x/x3pmlnn9y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiwpj83ce"/><path class="x3pmlnn9y"/>`,
		"fallback": "energy-icons:rego-certificate-20",
	});
}

export default Component;
