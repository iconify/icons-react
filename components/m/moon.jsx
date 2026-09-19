import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fje1h4byq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fje1h4byq"/>`,
		"fallback": "icon-park-outline:moon",
	});
}

export default Component;
