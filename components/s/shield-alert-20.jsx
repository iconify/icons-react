import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkihj-w6g.css';
import '../../css/y/yttd9waod.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkihj-w6g"/><path class="yttd9waod"/>`,
		"fallback": "energy-icons:shield-alert-20",
	});
}

export default Component;
