import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o67-rbbrh.css';
import '../../css/k/kv7scgbdl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o67-rbbrh"/><path class="kv7scgbdl"/>`,
		"fallback": "selfhst:neo4j",
	});
}

export default Component;
