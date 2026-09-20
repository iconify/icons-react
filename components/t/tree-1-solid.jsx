import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csypp5bmu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csypp5bmu"/>`,
		"fallback": "streamline-plump:tree-1-solid",
	});
}

export default Component;
