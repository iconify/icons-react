import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/sghdsfbgj.css';
import '../../css/z/z9ifjblpb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="sghdsfbgj"/><path class="z9ifjblpb"/></g>`,
		"fallback": "streamline-plump:watch-1",
	});
}

export default Component;
