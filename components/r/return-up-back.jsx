import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzp_awbau.css';
import '../../css/n/nar_pyley.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzp_awbau"/><path class="nar_pyley"/>`,
		"fallback": "famicons:return-up-back",
	});
}

export default Component;
