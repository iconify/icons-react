import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvqgryrqk.css';
import '../../css/t/taxqw2bmt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvqgryrqk"/><path class="taxqw2bmt"/>`,
		"fallback": "maki:watch-15",
	});
}

export default Component;
