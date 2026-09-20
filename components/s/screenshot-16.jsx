import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf0wplfja.css';
import '../../css/o/o9m46ebzt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf0wplfja"/><path clip-rule="evenodd" class="o9m46ebzt"/>`,
		"fallback": "qlementine-icons:screenshot-16",
	});
}

export default Component;
