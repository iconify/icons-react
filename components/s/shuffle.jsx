import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thubav-po.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="thubav-po"/>`,
		"fallback": "gravity-ui:shuffle",
	});
}

export default Component;
