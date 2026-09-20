import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfza_bc8y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfza_bc8y"/>`,
		"fallback": "octicon:smiley-frustrated-16",
	});
}

export default Component;
