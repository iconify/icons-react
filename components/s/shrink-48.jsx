import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agcsd6j3i.css';
import '../../css/r/rps7bbcge.css';
import '../../css/n/nrn2j2qgp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agcsd6j3i"/><path class="rps7bbcge"/><path class="nrn2j2qgp"/>`,
		"fallback": "energy-icons:shrink-48",
	});
}

export default Component;
