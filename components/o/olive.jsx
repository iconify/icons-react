import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnfxmubfz.css';
import '../../css/a/a0tc0fl4f.css';
import '../../css/g/gq1uhwbdh.css';
import '../../css/o/o6avj7b5d.css';
import '../../css/l/lgnmebc0n.css';
import '../../css/r/rnikmekdf.css';
import '../../css/v/v06r1wbmy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="qnfxmubfz"/><path class="a0tc0fl4f"/><path class="gq1uhwbdh"/><path class="o6avj7b5d"/><path class="lgnmebc0n"/><path class="rnikmekdf"/><path class="v06r1wbmy"/></g>`,
		"fallback": "iconito:olive",
	});
}

export default Component;
