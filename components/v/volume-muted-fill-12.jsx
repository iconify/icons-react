import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzz3twymt.css';
import '../../css/p/p8lu4nblm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzz3twymt"/><path class="p8lu4nblm"/>`,
		"fallback": "garden:volume-muted-fill-12",
	});
}

export default Component;
