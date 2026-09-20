import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4w278ztg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4w278ztg"/>`,
		"fallback": "keyline-icons:panel-right-dashed",
	});
}

export default Component;
