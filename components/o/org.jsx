import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkfottbas.css';
import '../../css/c/c3z6yg-qu.css';
import '../../css/w/w2k4c4jrl.css';
import '../../css/j/j40lfpbca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkfottbas"/><path class="c3z6yg-qu"/><path class="w2k4c4jrl"/><path class="j40lfpbca"/>`,
		"fallback": "catppuccin:org",
	});
}

export default Component;
