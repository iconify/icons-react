import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-nk0j.css';
import '../../css/i/iw1iew.css';
import '../../css/a/ajozcb.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-nk0j iw1iew"/><path class="ajozcb iw1iew"/>`,
		"fallback": "line-md:lightbulb-twotone",
	});
}

export default Component;
