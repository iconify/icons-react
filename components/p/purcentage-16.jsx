import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jguu9r33v.css';
import '../../css/k/kum_exb2r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jguu9r33v"/><path clip-rule="evenodd" class="kum_exb2r"/>`,
		"fallback": "qlementine-icons:purcentage-16",
	});
}

export default Component;
