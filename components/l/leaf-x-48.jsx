import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viu8vyokx.css';
import '../../css/j/jyz_jvb2h.css';
import '../../css/t/t8dqc66mp.css';
import '../../css/v/vqbc74-cp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viu8vyokx"/><path class="jyz_jvb2h"/><path class="t8dqc66mp"/><path class="vqbc74-cp"/>`,
		"fallback": "energy-icons:leaf-x-48",
	});
}

export default Component;
