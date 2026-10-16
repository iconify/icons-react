import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwzdr3l_o.css';
import '../../css/d/drba2d7_i.css';
import '../../css/l/lxvj2gbfp.css';
import '../../css/m/mqankgyhb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwzdr3l_o"/><path class="drba2d7_i"/><path class="lxvj2gbfp"/><path class="mqankgyhb"/>`,
		"fallback": "energy-icons:weather-vane-20",
	});
}

export default Component;
