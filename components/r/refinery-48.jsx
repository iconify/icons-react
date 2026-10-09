import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok47q6brj.css';
import '../../css/j/j2wligtld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok47q6brj"/><path class="j2wligtld"/>`,
		"fallback": "energy-icons:refinery-48",
	});
}

export default Component;
