import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzrk6-7wu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzrk6-7wu"/>`,
		"fallback": "icon-park-outline:off-screen-two",
	});
}

export default Component;
