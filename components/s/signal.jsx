import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3t67bbhr.css';
import '../../css/v/v3utk9btu.css';
import '../../css/a/aao78ab3u.css';
import '../../css/a/a33y997-f.css';
import '../../css/j/jl36678xc.css';
import '../../css/g/gr9c55nys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3t67bbhr wm-shadow"/><path class="v3utk9btu wm-k"/><path class="aao78ab3u wm-k"/><path class="a33y997-f wm-k"/><path class="jl36678xc wm-k"/><path class="gr9c55nys wm-shine"/>`,
		"fallback": "withicons-pastel:signal",
	});
}

export default Component;
