import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zao9-4fdy.css';
import '../../css/x/xxxy15abp.css';
import '../../css/t/te5e841nv.css';
import '../../css/h/hg6om7bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zao9-4fdy"/><path class="xxxy15abp"/><path class="te5e841nv"/><path class="hg6om7bpf"/></g>`,
		"fallback": "lucide-extended:playing-cards-duotone",
	});
}

export default Component;
