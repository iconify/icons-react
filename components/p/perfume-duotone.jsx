import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6gf63mim.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/dinhgvbju.css';
import '../../css/l/l-z90qban.css';
import '../../css/g/ge8kibcyo.css';
import '../../css/x/xd6vkdjpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u6gf63mim"/><g class="mc2zb0bvp"><path class="dinhgvbju"/><path class="l-z90qban"/></g><path class="ge8kibcyo"/><path class="xd6vkdjpb"/></g>`,
		"fallback": "reicon:perfume-duotone",
	});
}

export default Component;
