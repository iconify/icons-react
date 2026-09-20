import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tba3nq.css';
import '../../css/b/bp45jb.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-3twqkg.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-t9c80f.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tba3nq"/><path class="bp45jb"/>`,
		"fallback": "line-md:star-pulsating-twotone-loop",
	});
}

export default Component;
