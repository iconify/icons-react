import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgsklfbyu.css';
import '../../css/d/d516lezif.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgsklfbyu"/><path class="d516lezif"/>`,
		"fallback": "streamline-block:other-ui-graph",
	});
}

export default Component;
