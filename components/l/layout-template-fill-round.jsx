import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pheg_6bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pheg_6bdh"/>`,
		"fallback": "coolicons:layout-template-fill-round",
	});
}

export default Component;
