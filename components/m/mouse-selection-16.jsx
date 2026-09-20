import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_cydubst.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s_cydubst"/>`,
		"fallback": "qlementine-icons:mouse-selection-16",
	});
}

export default Component;
