import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/jl5ph-bdp.css';
import '../../css/c/cequp8b6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="jl5ph-bdp"/><path class="cequp8b6z"/></g>`,
		"fallback": "streamline-plump:notepad-text",
	});
}

export default Component;
