import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9nzqsb_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9nzqsb_f"/>`,
		"fallback": "roentgen:p-small-bicycle-parking-stand",
	});
}

export default Component;
