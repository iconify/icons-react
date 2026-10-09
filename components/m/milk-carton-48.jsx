import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytre_iyqf.css';
import '../../css/a/aqm8hp2ux.css';
import '../../css/a/a6d6nheff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytre_iyqf"/><path class="aqm8hp2ux"/><path class="a6d6nheff"/>`,
		"fallback": "energy-icons:milk-carton-48",
	});
}

export default Component;
