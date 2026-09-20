import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv6_idbzi.css';
import '../../css/h/hcv589g6p.css';

const viewBox = {"width":1.28,"height":1.28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv6_idbzi"/><path class="hcv589g6p"/>`,
		"fallback": "material-icon-theme:snapcraft",
	});
}

export default Component;
