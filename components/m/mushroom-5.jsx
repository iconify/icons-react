import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idqiyb76f.css';
import '../../css/h/hwema026b.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idqiyb76f"/><path clip-rule="evenodd" class="hwema026b"/>`,
		"fallback": "lineicons:mushroom-5",
	});
}

export default Component;
