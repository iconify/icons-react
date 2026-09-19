import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwr6088ru.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwr6088ru"/>`,
		"fallback": "fa6-regular:money-bill-1",
	});
}

export default Component;
