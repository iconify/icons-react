import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhffk1rfs.css';
import '../../css/w/wd6p9pbhj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhffk1rfs"/><path class="wd6p9pbhj"/>`,
		"fallback": "energy-icons:user-plus-48-bold",
	});
}

export default Component;
