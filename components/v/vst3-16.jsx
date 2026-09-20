import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfrouqbvh.css';
import '../../css/z/z95vsobgs.css';
import '../../css/e/eenj7y3lv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfrouqbvh"/><path class="z95vsobgs"/><path class="eenj7y3lv"/>`,
		"fallback": "qlementine-icons:vst3-16",
	});
}

export default Component;
