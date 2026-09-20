import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2sfk-bes.css';
import '../../css/a/ajxq6raqs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2sfk-bes"/><path class="ajxq6raqs"/>`,
		"fallback": "vaadin:money",
	});
}

export default Component;
