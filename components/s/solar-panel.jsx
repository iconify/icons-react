import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqo4ribfv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqo4ribfv"/>`,
		"fallback": "roentgen:solar-panel",
	});
}

export default Component;
