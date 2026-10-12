import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-mlap11n.css';
import '../../css/v/vkcjghb5f.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-mlap11n"/><path class="vkcjghb5f"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:power-station-alert-48",
	});
}

export default Component;
