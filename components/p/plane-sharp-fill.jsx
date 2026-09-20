import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swhag75sb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swhag75sb"/>`,
		"fallback": "keyline-icons:plane-sharp-fill",
	});
}

export default Component;
