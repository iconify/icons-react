import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9vkkfbyq.css';
import '../../css/u/uhh21oc6x.css';
import '../../css/d/d00rzfrbm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9vkkfbyq"/><path class="uhh21oc6x"/><path class="d00rzfrbm"/>`,
		"fallback": "energy-icons:potentiometer-20",
	});
}

export default Component;
