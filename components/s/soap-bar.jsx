import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gc0o2bbci.css';
import '../../css/h/he1161fvk.css';
import '../../css/p/p5b-gehrh.css';
import '../../css/u/u5-i9hbwd.css';
import '../../css/x/xsyafvyim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gc0o2bbci"/><path class="he1161fvk"/><circle class="p5b-gehrh"/><circle class="u5-i9hbwd"/><path class="xsyafvyim"/></g>`,
		"fallback": "lucide-lab:soap-bar",
	});
}

export default Component;
