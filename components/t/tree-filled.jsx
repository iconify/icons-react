import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rey0q6hzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rey0q6hzv"/>`,
		"fallback": "boxicons:tree-filled",
	});
}

export default Component;
