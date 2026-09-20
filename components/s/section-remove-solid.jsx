import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8y5xackw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c8y5xackw"/>`,
		"fallback": "teenyicons:section-remove-solid",
	});
}

export default Component;
