import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcwfyf16x.css';
import '../../css/l/lfgx0yqjl.css';
import '../../css/g/gvtf67ctb.css';
import '../../css/u/ucn402gew.css';
import '../../css/k/kuaiedclu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcwfyf16x"/><path class="lfgx0yqjl"/><path class="gvtf67ctb"/><path class="ucn402gew"/><path class="kuaiedclu"/>`,
		"fallback": "energy-icons:trash-restore-48-bold",
	});
}

export default Component;
