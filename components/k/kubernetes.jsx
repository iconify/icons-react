import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ganpgob_x.css';
import '../../css/n/nh_1xf49f.css';

const viewBox = {"width":722.8,"height":702};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ganpgob_x"/><path class="nh_1xf49f"/>`,
		"fallback": "thesvg-color:kubernetes",
	});
}

export default Component;
