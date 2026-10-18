import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw96d85ov.css';
import '../../css/i/i1_yy39iv.css';
import '../../css/a/agaffo5ho.css';
import '../../css/p/pmviisk7a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw96d85ov"/><path class="i1_yy39iv"/><path class="agaffo5ho"/><path class="pmviisk7a"/>`,
		"fallback": "energy-icons:mine-water-20-bold",
	});
}

export default Component;
