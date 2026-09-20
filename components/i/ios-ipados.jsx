import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qw-bbnb-p.css';
import '../../css/p/p13hsybvg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qw-bbnb-p"/><path class="p13hsybvg"/></g>`,
		"fallback": "streamline-plump:ios-ipados",
	});
}

export default Component;
