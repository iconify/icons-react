import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/h/heh2nlbbt.css';
import '../../css/z/z99seoezc.css';
import '../../css/o/oi39qw3xj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="heh2nlbbt"/><path class="z99seoezc"/><path class="oi39qw3xj"/>`,
		"fallback": "energy-icons:marker-wind-48",
	});
}

export default Component;
