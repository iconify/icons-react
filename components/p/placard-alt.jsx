import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg7b_o56d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg7b_o56d"/>`,
		"fallback": "dinkie-icons:placard-alt",
	});
}

export default Component;
