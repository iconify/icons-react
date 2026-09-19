import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o66p27q8r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o66p27q8r"/>`,
		"fallback": "dinkie-icons:keycap-return-small",
	});
}

export default Component;
