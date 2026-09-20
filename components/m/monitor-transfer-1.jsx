import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c96dpobac.css';
import '../../css/p/pebqycclo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c96dpobac"/><path class="pebqycclo"/></g>`,
		"fallback": "streamline-ultimate:monitor-transfer-1",
	});
}

export default Component;
