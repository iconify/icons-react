import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zror_sbrn.css';
import '../../css/c/c_5bp2b7l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zror_sbrn"/><path class="c_5bp2b7l"/>`,
		"fallback": "octicon:person-cursor-16",
	});
}

export default Component;
