import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3nrppbry.css';
import '../../css/q/q7w59bb3x.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3nrppbry"/><path class="q7w59bb3x"/>`,
		"fallback": "tabler-flags:sweden",
	});
}

export default Component;
