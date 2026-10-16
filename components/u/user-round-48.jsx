import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zen2agbyu.css';
import '../../css/z/zaedueqlb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zen2agbyu"/><path class="zaedueqlb"/>`,
		"fallback": "energy-icons:user-round-48",
	});
}

export default Component;
