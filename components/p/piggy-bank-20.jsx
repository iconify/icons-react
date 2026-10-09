import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqqn4975g.css';
import '../../css/h/hgn5lvw7l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqqn4975g"/><path class="hgn5lvw7l"/>`,
		"fallback": "energy-icons:piggy-bank-20",
	});
}

export default Component;
