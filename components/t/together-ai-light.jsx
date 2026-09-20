import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4sx8wmoh.css';
import '../../css/d/d0osc_bpo.css';
import '../../css/h/hpmc1obus.css';

const viewBox = {"width":2159,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4sx8wmoh"/><path class="d0osc_bpo"/><path class="hpmc1obus"/>`,
		"fallback": "thesvg-color:together-ai-light",
	});
}

export default Component;
