import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi067zb2o.css';
import '../../css/v/vrgmnk6vg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi067zb2o"/><path class="vrgmnk6vg"/>`,
		"fallback": "octicon:repo-forked-locked-16",
	});
}

export default Component;
