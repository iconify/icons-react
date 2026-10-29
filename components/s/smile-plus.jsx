import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mobgpnbyt.css';
import '../../css/j/j71etvb-q.css';
import '../../css/m/mk6rif5et.css';
import '../../css/f/fk7fz6bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mobgpnbyt wm-k"/><path class="j71etvb-q"/><path class="mk6rif5et"/><path class="fk7fz6bib wm-s"/></g>`,
		"fallback": "withicons-bauhaus:smile-plus",
	});
}

export default Component;
