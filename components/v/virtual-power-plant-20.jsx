import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbv3grl-l.css';
import '../../css/i/idfrb-b4g.css';
import '../../css/k/kiditcb3w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbv3grl-l"/><path class="idfrb-b4g"/><path class="kiditcb3w"/>`,
		"fallback": "energy-icons:virtual-power-plant-20",
	});
}

export default Component;
