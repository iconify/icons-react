import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4xyx_bsy.css';
import '../../css/o/o-00tsbmu.css';
import '../../css/k/kr677l0as.css';
import '../../css/a/arqavzbum.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4xyx_bsy"/><path class="o-00tsbmu"/><path class="kr677l0as"/><path class="arqavzbum"/>`,
		"fallback": "ion:md-cloudy-night",
	});
}

export default Component;
