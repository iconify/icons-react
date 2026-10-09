import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5ui_2cdk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5ui_2cdk"/>`,
		"fallback": "energy-icons:panel-cleaning-20-bold",
	});
}

export default Component;
