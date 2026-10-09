import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec08kobtf.css';
import '../../css/m/mweb-cbkq.css';
import '../../css/x/xtbukpbgj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec08kobtf"/><path class="mweb-cbkq"/><path class="xtbukpbgj"/>`,
		"fallback": "energy-icons:kpi-20",
	});
}

export default Component;
