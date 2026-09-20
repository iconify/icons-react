import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-cdyfb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-cdyfb4a"/>`,
		"fallback": "uit:ruler-combined",
	});
}

export default Component;
