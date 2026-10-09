import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9d7--bko.css';
import '../../css/o/ogzzhkfdn.css';
import '../../css/d/ddzvqdr7g.css';
import '../../css/r/rmh-uhtym.css';
import '../../css/a/aqj0--bjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9d7--bko"/><path class="ogzzhkfdn"/><path class="ddzvqdr7g"/><path class="rmh-uhtym"/><path class="aqj0--bjv"/>`,
		"fallback": "energy-icons:plug-plus-20",
	});
}

export default Component;
