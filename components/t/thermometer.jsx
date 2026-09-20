import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/c29n8724j.css';
import '../../css/z/z9r16-b2r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="c29n8724j"/><path class="z9r16-b2r"/></g>`,
		"fallback": "streamline-plump:thermometer",
	});
}

export default Component;
