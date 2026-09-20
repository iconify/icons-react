import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg4igib2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg4igib2x"/>`,
		"fallback": "octicon:repo-16",
	});
}

export default Component;
