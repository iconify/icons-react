import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0jte5bwq.css';
import '../../css/u/u738m78mn.css';
import '../../css/e/e8odnlcxx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0jte5bwq"/><path class="u738m78mn"/><path class="e8odnlcxx"/>`,
		"fallback": "carbon:tool-kit",
	});
}

export default Component;
