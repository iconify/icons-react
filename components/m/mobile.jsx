import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhplk3b6j.css';
import '../../css/e/ehu_tqb0a.css';
import '../../css/q/qghyp15aw.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhplk3b6j"/><path class="ehu_tqb0a"/><path class="qghyp15aw"/>`,
		"fallback": "lineicons:mobile",
	});
}

export default Component;
