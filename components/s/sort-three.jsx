import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dyexcj6nn.css';
import '../../css/r/rh0hdtl9d.css';
import '../../css/s/syh2afb3b.css';
import '../../css/j/jnuty5b-h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dyexcj6nn"/><path class="rh0hdtl9d"/><path class="syh2afb3b"/><path class="jnuty5b-h"/></g>`,
		"fallback": "icon-park:sort-three",
	});
}

export default Component;
