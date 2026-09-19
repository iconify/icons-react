import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu96i2m6r.css';
import '../../css/f/fbfcujy1a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu96i2m6r"/><path class="fbfcujy1a"/>`,
		"fallback": "catppuccin:swiftformat",
	});
}

export default Component;
