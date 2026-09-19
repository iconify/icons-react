import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_28jmb0w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_28jmb0w"/>`,
		"fallback": "gravity-ui:nut-hex",
	});
}

export default Component;
