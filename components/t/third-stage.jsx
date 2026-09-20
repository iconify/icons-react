import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xooecg6hp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xooecg6hp"/>`,
		"fallback": "roentgen:third-stage",
	});
}

export default Component;
