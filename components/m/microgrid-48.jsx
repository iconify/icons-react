import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1iv3qhdn.css';
import '../../css/d/de1hnzbwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1iv3qhdn"/><path class="de1hnzbwb"/>`,
		"fallback": "energy-icons:microgrid-48",
	});
}

export default Component;
