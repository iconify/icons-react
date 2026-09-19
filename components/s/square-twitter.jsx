import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf43ddl1a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf43ddl1a"/>`,
		"fallback": "fa7-brands:square-twitter",
	});
}

export default Component;
