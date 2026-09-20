import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r491jv1-w.css';
import '../../css/s/suz6erb9m.css';
import '../../css/s/sfe1dac9u.css';
import '../../css/d/ddjrsy3wl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r491jv1-w"/><path class="suz6erb9m"/><path class="sfe1dac9u"/><path class="ddjrsy3wl"/>`,
		"fallback": "selfhst:jump",
	});
}

export default Component;
