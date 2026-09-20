import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkv1f1b2c.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkv1f1b2c"/>`,
		"fallback": "octicon:repo-push",
	});
}

export default Component;
