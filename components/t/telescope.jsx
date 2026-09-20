import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzh6aom-g.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzh6aom-g"/>`,
		"fallback": "octicon:telescope",
	});
}

export default Component;
