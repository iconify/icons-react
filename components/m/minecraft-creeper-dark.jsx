import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brgk90bxs.css';
import '../../css/v/vuh0gsb8g.css';
import '../../css/z/zdpgtwb8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brgk90bxs"/><path class="vuh0gsb8g"/><path class="zdpgtwb8f"/>`,
		"fallback": "selfhst:minecraft-creeper-dark",
	});
}

export default Component;
