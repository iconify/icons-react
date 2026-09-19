import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/cu4cgqbqg.css';
import '../../css/p/phdempf7i.css';
import '../../css/v/vnenx9bmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="cu4cgqbqg"/><path class="phdempf7i"/><path class="vnenx9bmi"/></g>`,
		"fallback": "icon-park:textarea",
	});
}

export default Component;
