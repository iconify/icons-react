import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg06y9bau.css';
import '../../css/j/j02yjqo5b.css';
import '../../css/v/vxu1d29jo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg06y9bau"/><path class="j02yjqo5b"/><path class="vxu1d29jo"/>`,
		"fallback": "energy-icons:substation-20",
	});
}

export default Component;
