import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqdv09daf.css';
import '../../css/b/bkmyoo3vr.css';
import '../../css/x/xj4uzj6yg.css';
import '../../css/x/xoajh0bqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqdv09daf"/><path class="bkmyoo3vr"/><path class="xj4uzj6yg"/><path class="xoajh0bqz"/>`,
		"fallback": "energy-icons:thermometer-snowflake-48",
	});
}

export default Component;
