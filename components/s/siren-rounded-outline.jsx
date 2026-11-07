import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kek-0ac7m.css';
import '../../css/v/v1fis2bwy.css';
import '../../css/d/dypmnxb4q.css';
import '../../css/c/ce-i1mh_z.css';
import '../../css/u/uljji2but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kek-0ac7m"/><path class="v1fis2bwy"/><path clip-rule="evenodd" class="dypmnxb4q"/><path class="ce-i1mh_z"/><path class="uljji2but"/>`,
		"fallback": "solar:siren-rounded-outline",
	});
}

export default Component;
