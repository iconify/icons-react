import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc2-_9bsz.css';
import '../../css/h/htsp7iemw.css';
import '../../css/g/geee6pspy.css';
import '../../css/c/c9czsybcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc2-_9bsz"/><path class="htsp7iemw"/><path class="geee6pspy"/><path class="c9czsybcg"/>`,
		"fallback": "ion:ios-loop-strong",
	});
}

export default Component;
