import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viikj1bys.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viikj1bys"/>`,
		"fallback": "octicon:triangle-left-16",
	});
}

export default Component;
