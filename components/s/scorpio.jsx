import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6hf64byk.css';
import '../../css/q/qvco7xbbz.css';
import '../../css/h/h9uoaqcaq.css';
import '../../css/h/h_pt1abna.css';
import '../../css/r/rln46_bex.css';
import '../../css/s/s7-yi3b5z.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="v6hf64byk"><path class="qvco7xbbz"/><path class="h9uoaqcaq"/></g><path class="h_pt1abna"/><path class="rln46_bex"/><path class="s7-yi3b5z"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:scorpio",
	});
}

export default Component;
