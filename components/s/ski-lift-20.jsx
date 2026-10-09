import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox-4if7um.css';
import '../../css/l/ld9a8ebwv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox-4if7um"/><path class="ld9a8ebwv"/>`,
		"fallback": "energy-icons:ski-lift-20",
	});
}

export default Component;
