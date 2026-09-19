import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rz8zezu5f.css';
import '../../css/b/bvrootbcu.css';
import '../../css/h/hfrppyb3s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="rz8zezu5f"/><path class="bvrootbcu"/><path class="hfrppyb3s"/></g>`,
		"fallback": "glyphs-poly:speedometer-3",
	});
}

export default Component;
