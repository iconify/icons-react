import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjjbx7o6y.css';
import '../../css/m/mpr9ncc0j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjjbx7o6y"/><path class="mpr9ncc0j"/>`,
		"fallback": "streamline-flex:investing-and-banking-solid",
	});
}

export default Component;
