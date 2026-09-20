import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3yggvbbt.css';
import '../../css/z/zgmduh90n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3yggvbbt"/><path class="zgmduh90n"/>`,
		"fallback": "stash:trend-arrow-up-duotone",
	});
}

export default Component;
