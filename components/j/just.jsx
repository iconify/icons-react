import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utdc-ibes.css';
import '../../css/e/ebr8uinkx.css';
import '../../css/i/ibwikzbkq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="utdc-ibes"/><circle class="ebr8uinkx"/><circle class="ibwikzbkq"/>`,
		"fallback": "catppuccin:just",
	});
}

export default Component;
