import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4sd0g1go.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4sd0g1go"/>`,
		"fallback": "fontisto:test-tube-alt",
	});
}

export default Component;
