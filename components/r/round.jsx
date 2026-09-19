import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjei4k8qe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cjei4k8qe"/>`,
		"fallback": "icon-park:round",
	});
}

export default Component;
