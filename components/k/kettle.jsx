import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzfce9bmw.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzfce9bmw"/>`,
		"fallback": "icon-park-outline:kettle",
	});
}

export default Component;
