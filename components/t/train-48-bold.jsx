import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmcricc-j.css';
import '../../css/i/i90rnaccf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmcricc-j"/><path class="i90rnaccf"/>`,
		"fallback": "energy-icons:train-48-bold",
	});
}

export default Component;
