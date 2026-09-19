import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w14fwxg9c.css';
import '../../css/p/p9upddc0f.css';
import '../../css/o/o7tfrmnak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w14fwxg9c"/><path class="p9upddc0f"/><path class="o7tfrmnak"/>`,
		"fallback": "carbon:operation-if",
	});
}

export default Component;
