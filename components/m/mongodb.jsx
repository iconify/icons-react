import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf5strfwg.css';
import '../../css/m/m-15fobun.css';
import '../../css/m/m_3d8hblg.css';
import '../../css/o/oid2twx0v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="hf5strfwg"/><path class="m-15fobun"/><path class="m_3d8hblg"/><path class="oid2twx0v"/></g>`,
		"fallback": "skill-icons:mongodb",
	});
}

export default Component;
