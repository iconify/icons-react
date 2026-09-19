import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syip7tkhe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syip7tkhe"/>`,
		"fallback": "icon-park-outline:left",
	});
}

export default Component;
