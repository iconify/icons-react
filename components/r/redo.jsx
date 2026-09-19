import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8u6r351b.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8u6r351b"/>`,
		"fallback": "fontisto:redo",
	});
}

export default Component;
