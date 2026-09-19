import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kns-59bpg.css';
import '../../css/s/sgs4ykqpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kns-59bpg"/><path class="sgs4ykqpq"/></g>`,
		"fallback": "iconoir:mastodon",
	});
}

export default Component;
