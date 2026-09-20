import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/foqnye_be.css';
import '../../css/z/z6d4gv1ed.css';
import '../../css/i/inqet5b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="foqnye_be"/><circle class="z6d4gv1ed"/><circle class="inqet5b8a"/></g>`,
		"fallback": "proicons:photo-filter",
	});
}

export default Component;
