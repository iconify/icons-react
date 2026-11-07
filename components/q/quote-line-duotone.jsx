import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wn2pl4bna.css';
import '../../css/z/zbrtlabdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wn2pl4bna"/><path class="zbrtlabdh"/></g>`,
		"fallback": "solar:quote-line-duotone",
	});
}

export default Component;
