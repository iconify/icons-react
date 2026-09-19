import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suyzr6jpx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suyzr6jpx"/>`,
		"fallback": "icon-park-outline:menu-unfold",
	});
}

export default Component;
