import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6re6y22q.css';
import '../../css/a/ak63jmbgk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6re6y22q"/><path class="ak63jmbgk"/>`,
		"fallback": "carbon:text-fill",
	});
}

export default Component;
