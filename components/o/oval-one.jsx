import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep9shg-nt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="ep9shg-nt"/>`,
		"fallback": "icon-park-solid:oval-one",
	});
}

export default Component;
