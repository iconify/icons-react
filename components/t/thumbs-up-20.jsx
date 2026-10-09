import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy8iuubej.css';
import '../../css/y/yc11i_vei.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy8iuubej"/><path class="yc11i_vei"/>`,
		"fallback": "energy-icons:thumbs-up-20",
	});
}

export default Component;
