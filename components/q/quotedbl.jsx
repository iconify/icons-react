import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp_ca1b9g.css';

const viewBox = {"width":262,"height":723};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp_ca1b9g"/>`,
		"fallback": "ls:quotedbl",
	});
}

export default Component;
