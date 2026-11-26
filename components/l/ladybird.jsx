import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjtlbw2qm.css';
import '../../css/d/dlomshbcq.css';

const viewBox = {"width":238.125,"height":238.125};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bjtlbw2qm"/><path class="dlomshbcq"/>`,
		"fallback": "thesvg-color:ladybird",
	});
}

export default Component;
