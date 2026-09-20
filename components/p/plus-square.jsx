import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggd0kfbao.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ggd0kfbao"/>`,
		"fallback": "pajamas:plus-square",
	});
}

export default Component;
