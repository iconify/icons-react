import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_n7y0bah.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m_n7y0bah"/>`,
		"fallback": "gravity-ui:tv",
	});
}

export default Component;
