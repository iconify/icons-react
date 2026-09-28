import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_2_1m9-s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_2_1m9-s"/>`,
		"fallback": "pinhead:spoon-beside-table-knife-in-gable-roofed-shelter",
	});
}

export default Component;
