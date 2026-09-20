import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8t-vbbi.css';
import '../../css/b/b_slk7bwp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj8t-vbbi"/><path class="b_slk7bwp"/>`,
		"fallback": "openmoji:leaf-fluttering-in-wind",
	});
}

export default Component;
