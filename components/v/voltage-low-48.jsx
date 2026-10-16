import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgjsrykaw.css';
import '../../css/e/egp_zuxqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgjsrykaw"/><path class="egp_zuxqz"/>`,
		"fallback": "energy-icons:voltage-low-48",
	});
}

export default Component;
