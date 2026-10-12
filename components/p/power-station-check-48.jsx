import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-mlap11n.css';
import '../../css/v/vkcjghb5f.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-mlap11n"/><path class="vkcjghb5f"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:power-station-check-48",
	});
}

export default Component;
