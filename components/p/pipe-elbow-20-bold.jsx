import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmbneo8nu.css';
import '../../css/x/x-j_oib3m.css';
import '../../css/e/ef10pob7a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmbneo8nu"/><path class="x-j_oib3m"/><path class="ef10pob7a"/>`,
		"fallback": "energy-icons:pipe-elbow-20-bold",
	});
}

export default Component;
