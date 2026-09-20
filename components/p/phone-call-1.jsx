import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/uef8dzb8v.css';
import '../../css/e/eg6gwjs6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="uef8dzb8v"/><path class="eg6gwjs6k"/></g>`,
		"fallback": "streamline-cyber:phone-call-1",
	});
}

export default Component;
