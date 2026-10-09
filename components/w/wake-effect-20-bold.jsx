import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6k8gux7d.css';
import '../../css/i/ilc61dbwx.css';
import '../../css/q/qdwklz3cm.css';
import '../../css/y/yhk6owtet.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6k8gux7d"/><path class="ilc61dbwx"/><path class="qdwklz3cm"/><path class="yhk6owtet"/>`,
		"fallback": "energy-icons:wake-effect-20-bold",
	});
}

export default Component;
