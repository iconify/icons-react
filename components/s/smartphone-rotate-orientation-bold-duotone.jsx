import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q5tvtipym.css';
import '../../css/c/cvu7sfbsh.css';
import '../../css/h/h4wkunbnb.css';
import '../../css/c/cs7ou6vcv.css';
import '../../css/e/es3ghmy2j.css';
import '../../css/q/qykokzbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="q5tvtipym"/><path class="cvu7sfbsh"/></g><path class="h4wkunbnb"/><path class="cs7ou6vcv"/><path class="es3ghmy2j"/><path class="qykokzbhg"/>`,
		"fallback": "solar:smartphone-rotate-orientation-bold-duotone",
	});
}

export default Component;
