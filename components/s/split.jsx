import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miu2v2oim.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miu2v2oim"/>`,
		"fallback": "vaadin:split",
	});
}

export default Component;
