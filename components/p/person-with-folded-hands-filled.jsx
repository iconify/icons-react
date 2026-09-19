import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh6x7jqib.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh6x7jqib"/>`,
		"fallback": "dinkie-icons:person-with-folded-hands-filled",
	});
}

export default Component;
