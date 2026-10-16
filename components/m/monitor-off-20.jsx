import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7x5yta8s.css';
import '../../css/k/kvl9ucc0s.css';
import '../../css/p/pssx0khhj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7x5yta8s"/><path class="kvl9ucc0s"/><path class="pssx0khhj"/>`,
		"fallback": "energy-icons:monitor-off-20",
	});
}

export default Component;
