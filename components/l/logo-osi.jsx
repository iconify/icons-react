import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2c-5ubrt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r2c-5ubrt"/>`,
		"fallback": "gravity-ui:logo-osi",
	});
}

export default Component;
