import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nml4dbbpj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nml4dbbpj"/>`,
		"fallback": "lsicon:thumb-down-outline",
	});
}

export default Component;
