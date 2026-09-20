import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkjsnojvf.css';
import '../../css/h/hrl1fmafq.css';
import '../../css/c/c4s-zobzt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkjsnojvf"/><path class="hrl1fmafq"/><circle class="c4s-zobzt"/>`,
		"fallback": "ooui:logo-wikiquote",
	});
}

export default Component;
