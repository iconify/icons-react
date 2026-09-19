import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhw27ubtu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qhw27ubtu"/>`,
		"fallback": "gravity-ui:lock-open-fill",
	});
}

export default Component;
