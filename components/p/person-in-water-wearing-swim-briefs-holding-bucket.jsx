import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj9vsub_d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj9vsub_d"/>`,
		"fallback": "pinhead:person-in-water-wearing-swim-briefs-holding-bucket",
	});
}

export default Component;
