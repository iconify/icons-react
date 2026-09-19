import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_tplbc1l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_tplbc1l"/>`,
		"fallback": "f7:rectangle-expand-vertical",
	});
}

export default Component;
