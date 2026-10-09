import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoae257bl.css';
import '../../css/g/gi5oa8bic.css';
import '../../css/h/hcflecbqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoae257bl"/><path class="gi5oa8bic"/><path class="hcflecbqd"/>`,
		"fallback": "energy-icons:penstock-48",
	});
}

export default Component;
