import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oegrs6bql.css';
import '../../css/s/sdign8ysz.css';
import '../../css/k/kl3wgccdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oegrs6bql"/><path class="sdign8ysz"/><path class="kl3wgccdm"/>`,
		"fallback": "energy-icons:receipt-refund-48",
	});
}

export default Component;
