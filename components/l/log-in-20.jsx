import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbmplvbtr.css';
import '../../css/z/ztnh5ln4w.css';
import '../../css/a/afdw2ab2k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbmplvbtr"/><path class="ztnh5ln4w"/><path class="afdw2ab2k"/>`,
		"fallback": "energy-icons:log-in-20",
	});
}

export default Component;
