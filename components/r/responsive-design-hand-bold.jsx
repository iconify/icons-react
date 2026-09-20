import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpgyleyhy.css';
import '../../css/h/hzmzgel7a.css';
import '../../css/n/n5o-hub3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpgyleyhy"/><path class="hzmzgel7a"/><path class="n5o-hub3h"/>`,
		"fallback": "streamline-ultimate:responsive-design-hand-bold",
	});
}

export default Component;
