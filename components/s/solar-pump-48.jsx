import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tupyodbki.css';
import '../../css/k/k19v9_bwo.css';
import '../../css/c/cizg-mbqj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tupyodbki"/><path class="k19v9_bwo"/><path class="cizg-mbqj"/>`,
		"fallback": "energy-icons:solar-pump-48",
	});
}

export default Component;
