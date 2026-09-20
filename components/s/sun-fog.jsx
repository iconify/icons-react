import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s7m10y-tu.css';
import '../../css/l/ls11zrbpz.css';
import '../../css/j/jmw85sbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s7m10y-tu"/><path class="ls11zrbpz"/><path class="jmw85sbjz"/></g>`,
		"fallback": "reicon:sun-fog",
	});
}

export default Component;
