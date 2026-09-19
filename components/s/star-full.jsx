import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no6vztd3x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no6vztd3x"/>`,
		"fallback": "codicon:star-full",
	});
}

export default Component;
