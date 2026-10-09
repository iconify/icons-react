import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz4dh6bfp.css';
import '../../css/e/ekqm_acki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz4dh6bfp"/><path class="ekqm_acki"/>`,
		"fallback": "energy-icons:mountain-48-bold",
	});
}

export default Component;
