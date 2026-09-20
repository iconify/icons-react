import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/i/i5i21jbwp.css';
import '../../css/w/wmo8ybjrj.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="i5i21jbwp"/><path class="wmo8ybjrj"/></g>`,
		"fallback": "skill-icons:java-dark",
	});
}

export default Component;
