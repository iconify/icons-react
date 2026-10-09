import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_3g6zbib.css';
import '../../css/n/nin37acqn.css';
import '../../css/y/y6gb_wbfk.css';
import '../../css/y/yrp93bbsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_3g6zbib"/><path class="nin37acqn"/><path class="y6gb_wbfk"/><path class="yrp93bbsv"/>`,
		"fallback": "energy-icons:mic-20",
	});
}

export default Component;
