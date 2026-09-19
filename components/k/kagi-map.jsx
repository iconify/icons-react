import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldfklfq3r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldfklfq3r"/>`,
		"fallback": "icon-park:kagi-map",
	});
}

export default Component;
