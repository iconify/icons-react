import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk5hyp-iw.css';
import '../../css/d/dhnqkbc9f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk5hyp-iw"/><path class="dhnqkbc9f"/>`,
		"fallback": "octicon:issue-tracked-in-16",
	});
}

export default Component;
