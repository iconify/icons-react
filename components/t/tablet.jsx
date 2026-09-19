import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga5axac9a.css';

const viewBox = {"width":560,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga5axac9a"/>`,
		"fallback": "il:tablet",
	});
}

export default Component;
