import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl12y3b3s.css';
import '../../css/g/grg2vfnmu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl12y3b3s"/><path class="grg2vfnmu"/>`,
		"fallback": "ooui:paste-rtl",
	});
}

export default Component;
