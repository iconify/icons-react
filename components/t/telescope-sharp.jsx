import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsgvrfbam.css';
import '../../css/h/h_8zds5nd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsgvrfbam"/><path class="h_8zds5nd"/>`,
		"fallback": "famicons:telescope-sharp",
	});
}

export default Component;
