import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as_ueqb2n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as_ueqb2n"/>`,
		"fallback": "pinhead:person-beside-person-above-pickup-truck",
	});
}

export default Component;
