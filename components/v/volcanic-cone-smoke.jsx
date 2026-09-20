import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awckl0dec.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awckl0dec"/>`,
		"fallback": "roentgen:volcanic-cone-smoke",
	});
}

export default Component;
