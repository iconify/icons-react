import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmvzjachi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gmvzjachi"/>`,
		"fallback": "gravity-ui:trapezoid-up-line-vertical",
	});
}

export default Component;
