import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awel-wb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awel-wb2k"/>`,
		"fallback": "tabler:location-exclamation",
	});
}

export default Component;
