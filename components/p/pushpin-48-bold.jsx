import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7aw6lb_z.css';
import '../../css/b/b9njywbbk.css';
import '../../css/u/uyyqc0_4u.css';
import '../../css/t/tyapp0bst.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7aw6lb_z"/><path class="b9njywbbk"/><path class="uyyqc0_4u"/><path class="tyapp0bst"/>`,
		"fallback": "energy-icons:pushpin-48-bold",
	});
}

export default Component;
