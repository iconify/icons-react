import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb0i8bcuz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb0i8bcuz"/>`,
		"fallback": "nimbus:pencil",
	});
}

export default Component;
