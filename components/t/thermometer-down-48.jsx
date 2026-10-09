import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqdv09daf.css';
import '../../css/i/ieq7_db9f.css';
import '../../css/e/egp_zuxqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqdv09daf"/><path class="ieq7_db9f"/><path class="egp_zuxqz"/>`,
		"fallback": "energy-icons:thermometer-down-48",
	});
}

export default Component;
