import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsq2eebmc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qsq2eebmc"/>`,
		"fallback": "gravity-ui:route",
	});
}

export default Component;
