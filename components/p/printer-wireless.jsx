import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfyycdpcj.css';
import '../../css/b/bqd8obb_n.css';
import '../../css/x/xkkg5jb3p.css';
import '../../css/o/o5-h93buo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sfyycdpcj"/><path clip-rule="evenodd" class="bqd8obb_n"/><path class="xkkg5jb3p"/><path class="o5-h93buo"/></g>`,
		"fallback": "streamline-flex-color:printer-wireless",
	});
}

export default Component;
