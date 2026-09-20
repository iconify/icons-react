import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_cec3aod.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_cec3aod"/>`,
		"fallback": "sidekickicons:lock-semi-open-20-solid",
	});
}

export default Component;
