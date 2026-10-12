import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqcluhbqi.css';
import '../../css/q/qn6jbqb-n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqcluhbqi"/><path class="qn6jbqb-n"/>`,
		"fallback": "energy-icons:set-square-20",
	});
}

export default Component;
