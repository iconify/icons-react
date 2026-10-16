import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o84rn3bvm.css';
import '../../css/n/nbj9xhbai.css';
import '../../css/w/w742qcbke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o84rn3bvm"/><path class="nbj9xhbai"/><path class="w742qcbke"/>`,
		"fallback": "energy-icons:lidar-48",
	});
}

export default Component;
