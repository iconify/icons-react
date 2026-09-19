import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sr7lc_bco.css';
import '../../css/v/vf6rctb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sr7lc_bco"/><path class="vf6rctb2r"/></g>`,
		"fallback": "covid:personal-hygiene-hand-liquid-soap",
	});
}

export default Component;
