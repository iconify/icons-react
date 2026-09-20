import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iala6ptcd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iala6ptcd"/>`,
		"fallback": "maki:waste-basket-15",
	});
}

export default Component;
