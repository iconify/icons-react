import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uci5wiu_k.css';
import '../../css/r/r87pkpb3r.css';
import '../../css/f/f8i9k6bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uci5wiu_k"/><path class="r87pkpb3r"/><path class="f8i9k6bbh"/></g>`,
		"fallback": "covid:symptoms-virus-diarrhea-2",
	});
}

export default Component;
