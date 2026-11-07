import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lloebebob.css';
import '../../css/g/gwm-eyb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lloebebob"/><path class="gwm-eyb4t"/>`,
		"fallback": "solar:round-alt-arrow-up-bold-duotone",
	});
}

export default Component;
