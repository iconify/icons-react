import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ousr7gb-s.css';
import '../../css/s/s7at75-qv.css';
import '../../css/d/dz1d2ub-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ousr7gb-s wm-k"/><path class="s7at75-qv wm-k"/><path class="dz1d2ub-o wm-a"/>`,
		"fallback": "withicons-bauhaus:panel-left-open",
	});
}

export default Component;
