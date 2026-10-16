import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvrtv7bqi.css';
import '../../css/p/pazdl73hk.css';
import '../../css/p/p7nvdbbgt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvrtv7bqi"/><path class="pazdl73hk"/><path class="p7nvdbbgt"/>`,
		"fallback": "energy-icons:refuse-truck-20-bold",
	});
}

export default Component;
