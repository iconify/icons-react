import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv2z8xbnp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv2z8xbnp"/>`,
		"fallback": "gravity-ui:triangle-left-fill",
	});
}

export default Component;
