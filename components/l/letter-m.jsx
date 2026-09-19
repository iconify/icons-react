import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7spctb7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7spctb7o"/>`,
		"fallback": "gravity-ui:letter-m",
	});
}

export default Component;
