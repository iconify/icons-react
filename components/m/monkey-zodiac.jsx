import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j3j_1ebwj.css';
import '../../css/v/vqctzsb3a.css';
import '../../css/v/vyvrc948i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="j3j_1ebwj"/><path class="vqctzsb3a"/><path class="vyvrc948i"/></g>`,
		"fallback": "icon-park:monkey-zodiac",
	});
}

export default Component;
