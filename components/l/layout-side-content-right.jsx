import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_dkpgfkq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_dkpgfkq"/>`,
		"fallback": "gravity-ui:layout-side-content-right",
	});
}

export default Component;
