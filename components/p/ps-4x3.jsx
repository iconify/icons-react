import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkhncqomu.css';
import '../../css/i/ictwwwp8x.css';
import '../../css/t/tkitebcnv.css';
import '../../css/f/f4o7dgpcz.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkhncqomu"/><path class="ictwwwp8x"/><path class="tkitebcnv"/><path class="f4o7dgpcz"/>`,
		"fallback": "flag:ps-4x3",
	});
}

export default Component;
