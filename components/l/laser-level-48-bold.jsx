import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh5lwhb7v.css';
import '../../css/g/gyt736dji.css';
import '../../css/h/hua3e5bny.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh5lwhb7v"/><path class="gyt736dji"/><path class="hua3e5bny"/>`,
		"fallback": "energy-icons:laser-level-48-bold",
	});
}

export default Component;
