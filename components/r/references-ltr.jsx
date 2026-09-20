import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z85_dpqxw.css';
import '../../css/n/nr_jdhnzu.css';
import '../../css/a/axc47sboq.css';
import '../../css/a/amd0_d8mz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z85_dpqxw"/><path class="nr_jdhnzu"/><path class="axc47sboq"/><path class="amd0_d8mz"/>`,
		"fallback": "ooui:references-ltr",
	});
}

export default Component;
