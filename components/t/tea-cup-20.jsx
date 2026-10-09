import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leutjaccr.css';
import '../../css/k/kogtqeljo.css';
import '../../css/a/av7sw4bua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leutjaccr"/><path class="kogtqeljo"/><path class="av7sw4bua"/>`,
		"fallback": "energy-icons:tea-cup-20",
	});
}

export default Component;
