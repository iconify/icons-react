import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os8-e4jzp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os8-e4jzp"/>`,
		"fallback": "streamline-block:other-ui-hand-select",
	});
}

export default Component;
