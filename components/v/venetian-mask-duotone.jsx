import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2zh0mbqm.css';
import '../../css/d/d_hvd6mmh.css';
import '../../css/c/csoims2zl.css';
import '../../css/w/wowvxbhwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2zh0mbqm"/><path class="d_hvd6mmh"/><path class="csoims2zl"/><path class="wowvxbhwr"/></g>`,
		"fallback": "lucide-extended:venetian-mask-duotone",
	});
}

export default Component;
