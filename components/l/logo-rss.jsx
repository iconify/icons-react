import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnycbel7f.css';
import '../../css/v/vxg7h7uod.css';
import '../../css/p/poohdx77y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnycbel7f"/><path class="vxg7h7uod"/><path class="poohdx77y"/>`,
		"fallback": "famicons:logo-rss",
	});
}

export default Component;
