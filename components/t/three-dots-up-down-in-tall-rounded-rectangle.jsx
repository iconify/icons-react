import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzgx5tmfv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzgx5tmfv"/>`,
		"fallback": "pinhead:three-dots-up-down-in-tall-rounded-rectangle",
	});
}

export default Component;
