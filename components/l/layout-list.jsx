import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeyn_xu8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yeyn_xu8x"/>`,
		"fallback": "gravity-ui:layout-list",
	});
}

export default Component;
