import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi28l3syr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi28l3syr"/>`,
		"fallback": "streamline:interface-arrows-button-to-bottom-arrow-down-line-to-bottom",
	});
}

export default Component;
