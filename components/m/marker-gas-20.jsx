import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgjp5_b_u.css';
import '../../css/h/hdf3k4bos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgjp5_b_u"/><path class="hdf3k4bos"/>`,
		"fallback": "energy-icons:marker-gas-20",
	});
}

export default Component;
