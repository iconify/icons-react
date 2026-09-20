import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xik-vs_jl.css';
import '../../css/o/owdhvpbwp.css';
import '../../css/k/kt2xtwbum.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xik-vs_jl"/><path class="owdhvpbwp"/><path class="kt2xtwbum"/>`,
		"fallback": "selfhst:neodb",
	});
}

export default Component;
