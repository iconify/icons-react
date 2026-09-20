import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm-p47dmz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm-p47dmz"/>`,
		"fallback": "uiw:setting-o",
	});
}

export default Component;
