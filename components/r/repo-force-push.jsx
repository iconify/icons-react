import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4aayyukv.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4aayyukv"/>`,
		"fallback": "octicon:repo-force-push",
	});
}

export default Component;
