import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvpdrtm6x.css';
import '../../css/k/kgx7jsbsk.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvpdrtm6x"/><path class="kgx7jsbsk"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:mail-minus-20-bold",
	});
}

export default Component;
