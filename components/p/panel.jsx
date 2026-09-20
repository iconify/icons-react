import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz6owcb0g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz6owcb0g"/>`,
		"fallback": "vaadin:panel",
	});
}

export default Component;
