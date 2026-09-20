import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u3wqukbdf.css';
import '../../css/v/vilztpoex.css';
import '../../css/f/fu89v9oxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u3wqukbdf"/><path class="vilztpoex"/><path class="fu89v9oxg"/></g>`,
		"fallback": "streamline-plump:lift",
	});
}

export default Component;
