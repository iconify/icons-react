import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4bwg2bvq.css';
import '../../css/y/y7jxbyb3b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4bwg2bvq"/><path class="y7jxbyb3b"/>`,
		"fallback": "streamline-block:other-ui-mail",
	});
}

export default Component;
