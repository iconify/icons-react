import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/enopmab9v.css';
import '../../css/y/yopk2rb4o.css';
import '../../css/n/ntme5abyo.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/t-u7kqb7p.css';
import '../../css/n/n6zmmqbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="enopmab9v"/><path class="yopk2rb4o"/><path class="ntme5abyo"/><g class="mc2zb0bvp"><path class="t-u7kqb7p"/><path class="n6zmmqbji"/></g><g class="mc2zb0bvp"><path class="t-u7kqb7p"/><path class="n6zmmqbji"/></g></g>`,
		"fallback": "solar:shop-bold-duotone",
	});
}

export default Component;
