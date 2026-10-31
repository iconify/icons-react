import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_klbhwa.css';
import '../../css/k/k18v_ab6e.css';
import '../../css/v/vfnwwubpy.css';
import '../../css/m/ms9yjsb5g.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_klbhwa"/><path class="k18v_ab6e"/><path class="vfnwwubpy"/><path class="ms9yjsb5g"/>`,
		"fallback": "tabler-flags:venezuela",
	});
}

export default Component;
