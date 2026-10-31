import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh_u97f-x.css';
import '../../css/f/f5rb8abwp.css';
import '../../css/z/zy0c3b-sv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh_u97f-x"/><path class="f5rb8abwp"/><path class="zy0c3b-sv"/>`,
		"fallback": "tabler-flags:saint-vincent-and-grenadines",
	});
}

export default Component;
