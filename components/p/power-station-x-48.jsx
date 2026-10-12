import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-mlap11n.css';
import '../../css/v/vkcjghb5f.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-mlap11n"/><path class="vkcjghb5f"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:power-station-x-48",
	});
}

export default Component;
