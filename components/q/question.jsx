import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfr121xds.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfr121xds"/>`,
		"fallback": "octicon:question",
	});
}

export default Component;
