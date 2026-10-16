import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc-vefb6k.css';
import '../../css/y/yepxcdblb.css';
import '../../css/y/ytv9lwb5g.css';
import '../../css/k/kikr_kw4e.css';
import '../../css/f/f9kh3-b2w.css';
import '../../css/y/yt4k1acfc.css';
import '../../css/y/ywzi2_7ys.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc-vefb6k"/><path class="yepxcdblb"/><path class="ytv9lwb5g"/><path class="kikr_kw4e"/><path class="f9kh3-b2w"/><path class="yt4k1acfc"/><path class="ywzi2_7ys"/>`,
		"fallback": "energy-icons:mangrove-20-bold",
	});
}

export default Component;
