import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne82av_3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne82av_3f"/>`,
		"fallback": "grommet-icons:schedules",
	});
}

export default Component;
