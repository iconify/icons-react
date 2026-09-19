import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6pw43byp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o6pw43byp"/>`,
		"fallback": "gravity-ui:logo-slack",
	});
}

export default Component;
