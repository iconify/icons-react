import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dms_gtbfz.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dms_gtbfz"/>`,
		"fallback": "octicon:triangle-down",
	});
}

export default Component;
