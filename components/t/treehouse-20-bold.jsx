import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc3myab7j.css';
import '../../css/i/ixi5u0bsc.css';
import '../../css/u/ulkpqrb-s.css';
import '../../css/p/pcwgn2bgg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc3myab7j"/><path class="ixi5u0bsc"/><path class="ulkpqrb-s"/><path class="pcwgn2bgg"/>`,
		"fallback": "energy-icons:treehouse-20-bold",
	});
}

export default Component;
