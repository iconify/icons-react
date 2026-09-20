import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm1n_3d2g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm1n_3d2g"/>`,
		"fallback": "pinhead:person-wearing-skis-riding-chairlift",
	});
}

export default Component;
