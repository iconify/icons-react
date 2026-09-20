import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oks2q6bhe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oks2q6bhe"/>`,
		"fallback": "octicon:table-16",
	});
}

export default Component;
