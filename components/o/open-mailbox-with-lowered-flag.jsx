import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpof57bix.css';
import '../../css/z/z5o5m7b-a.css';
import '../../css/o/o2j0bab4m.css';
import '../../css/x/x_yz_x93n.css';
import '../../css/a/a360h6x4c.css';
import '../../css/b/brbw1pb8i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hpof57bix"/><path class="z5o5m7b-a"/><path class="o2j0bab4m"/><path class="x_yz_x93n"/><path class="a360h6x4c"/><path class="brbw1pb8i"/></g>`,
		"fallback": "fluent-emoji-flat:open-mailbox-with-lowered-flag",
	});
}

export default Component;
