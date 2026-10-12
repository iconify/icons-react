import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kj3pbrbbe.css';
import '../../css/b/buuk01b0b.css';
import '../../css/o/o82blrbht.css';
import '../../css/m/mgtoy8blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kj3pbrbbe"/><path class="buuk01b0b"/><path class="o82blrbht"/><path class="mgtoy8blj"/></g>`,
		"fallback": "lucide-extended:ship-cargo-duotone",
	});
}

export default Component;
