import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfi146w-l.css';
import '../../css/e/eeps4wpgj.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfi146w-l"/><path class="eeps4wpgj"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:power-station-check-48-bold",
	});
}

export default Component;
