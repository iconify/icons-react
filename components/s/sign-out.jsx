import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npx1l6b-f.css';
import '../../css/c/cywx5ebns.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npx1l6b-f"/><path class="cywx5ebns"/>`,
		"fallback": "vaadin:sign-out",
	});
}

export default Component;
