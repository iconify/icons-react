import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1tym-4tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1tym-4tt"/>`,
		"fallback": "keyline-icons:japanese-yen-sharp-duotone",
	});
}

export default Component;
