import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fikfu_54f.css';
import '../../css/e/ec43nwb3d.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fikfu_54f"/><path class="ec43nwb3d"/>`,
		"fallback": "clarity:launchpad-line",
	});
}

export default Component;
