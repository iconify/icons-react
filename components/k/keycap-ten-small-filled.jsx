import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm0tryqzt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm0tryqzt"/>`,
		"fallback": "dinkie-icons:keycap-ten-small-filled",
	});
}

export default Component;
