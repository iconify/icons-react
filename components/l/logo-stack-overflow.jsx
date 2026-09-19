import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rou2qjbts.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rou2qjbts"/>`,
		"fallback": "gravity-ui:logo-stack-overflow",
	});
}

export default Component;
