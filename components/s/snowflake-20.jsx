import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgnbte-qu.css';
import '../../css/c/cxtw4ab8u.css';
import '../../css/c/c2pyp_bvu.css';
import '../../css/h/hmxq_r-te.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgnbte-qu"/><path class="cxtw4ab8u"/><path class="c2pyp_bvu"/><path class="hmxq_r-te"/>`,
		"fallback": "energy-icons:snowflake-20",
	});
}

export default Component;
