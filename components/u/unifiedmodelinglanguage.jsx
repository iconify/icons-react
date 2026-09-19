import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hagcpabho.css';
import '../../css/g/gje4q2b_f.css';
import '../../css/i/i0ftdk2_o.css';
import '../../css/d/d86sbccfx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hagcpabho"/><path class="gje4q2b_f"/><path class="i0ftdk2_o"/><path class="d86sbccfx"/>`,
		"fallback": "devicon:unifiedmodelinglanguage",
	});
}

export default Component;
