import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m63vg2bps.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m63vg2bps"/>`,
		"fallback": "maki:marker-stroked-11",
	});
}

export default Component;
