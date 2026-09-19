import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opjyjt5pd.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opjyjt5pd"/>`,
		"fallback": "fa-solid:text-height",
	});
}

export default Component;
