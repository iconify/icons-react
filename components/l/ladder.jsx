import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlk7lo_3f.css';
import '../../css/d/dpz_dlb6v.css';
import '../../css/z/zn3-vg4ug.css';
import '../../css/l/lx930cc5o.css';
import '../../css/b/b0h4k8bco.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlk7lo_3f"/><path class="dpz_dlb6v"/><path class="zn3-vg4ug"/><path class="lx930cc5o"/><path class="b0h4k8bco"/>`,
		"fallback": "openmoji:ladder",
	});
}

export default Component;
