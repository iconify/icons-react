import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg-wc6boc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg-wc6boc"/>`,
		"fallback": "octicon:link-external-16",
	});
}

export default Component;
