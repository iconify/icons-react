import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar01g9bbd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="ar01g9bbd"/>`,
		"fallback": "icon-park-outline:oval-one",
	});
}

export default Component;
