import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnc2i3bjg.css';
import '../../css/q/q5fjd4e3y.css';
import '../../css/k/kyec3jbtu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnc2i3bjg"/><path class="q5fjd4e3y"/><path class="kyec3jbtu"/>`,
		"fallback": "energy-icons:quote-20",
	});
}

export default Component;
