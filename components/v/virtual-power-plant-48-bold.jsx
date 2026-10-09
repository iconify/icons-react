import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_ctiwi9q.css';
import '../../css/y/y_finwbhi.css';
import '../../css/l/lzsp7m9hf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_ctiwi9q"/><path class="y_finwbhi"/><path class="lzsp7m9hf"/>`,
		"fallback": "energy-icons:virtual-power-plant-48-bold",
	});
}

export default Component;
