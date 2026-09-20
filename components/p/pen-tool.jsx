import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u8-tidblb.css';
import '../../css/z/z2db7s0ew.css';
import '../../css/o/o213-dlix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u8-tidblb"/><path class="z2db7s0ew"/><path class="o213-dlix"/></g>`,
		"fallback": "streamline-plump:pen-tool",
	});
}

export default Component;
