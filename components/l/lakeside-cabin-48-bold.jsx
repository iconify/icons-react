import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_ts8_bno.css';
import '../../css/m/mmtwl7b9d.css';
import '../../css/b/bpxnjdbqd.css';
import '../../css/f/fpzuy5-2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_ts8_bno"/><path class="mmtwl7b9d"/><path class="bpxnjdbqd"/><path class="fpzuy5-2x"/>`,
		"fallback": "energy-icons:lakeside-cabin-48-bold",
	});
}

export default Component;
