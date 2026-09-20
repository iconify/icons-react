import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sws1rdbtn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sws1rdbtn"/>`,
		"fallback": "roentgen:shield-volcano",
	});
}

export default Component;
