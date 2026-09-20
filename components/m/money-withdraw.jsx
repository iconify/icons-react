import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtcj7q16c.css';
import '../../css/y/yn4943o-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtcj7q16c"/><path class="yn4943o-a"/>`,
		"fallback": "vaadin:money-withdraw",
	});
}

export default Component;
