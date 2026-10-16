import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbl98olvj.css';
import '../../css/d/drqiwqb8a.css';
import '../../css/o/o22z116ol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbl98olvj"/><path class="drqiwqb8a"/><path class="o22z116ol"/>`,
		"fallback": "energy-icons:pelton-wheel-48",
	});
}

export default Component;
