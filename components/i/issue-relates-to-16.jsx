import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfyu4cbug.css';
import '../../css/o/o95idacva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfyu4cbug"/><path class="o95idacva"/>`,
		"fallback": "octicon:issue-relates-to-16",
	});
}

export default Component;
