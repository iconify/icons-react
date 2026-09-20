import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-o_25boi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-o_25boi"/>`,
		"fallback": "teenyicons:paintbrush-solid",
	});
}

export default Component;
