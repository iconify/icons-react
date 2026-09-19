import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlll7jbyi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qlll7jbyi"/>`,
		"fallback": "gravity-ui:layout-rows-3",
	});
}

export default Component;
