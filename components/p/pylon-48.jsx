import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxl40ybqg.css';
import '../../css/s/sbasrbbib.css';
import '../../css/z/z92lvuenp.css';
import '../../css/q/qgobz-bwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxl40ybqg"/><path class="sbasrbbib"/><path class="z92lvuenp"/><path class="qgobz-bwl"/>`,
		"fallback": "energy-icons:pylon-48",
	});
}

export default Component;
