import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnrb4wbii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnrb4wbii"/>`,
		"fallback": "icomoon-free:paint-format",
	});
}

export default Component;
