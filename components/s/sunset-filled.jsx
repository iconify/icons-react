import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elp_duv8g.css';
import '../../css/j/jl_m3bc1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elp_duv8g"/><path class="jl_m3bc1u"/>`,
		"fallback": "ix:sunset-filled",
	});
}

export default Component;
