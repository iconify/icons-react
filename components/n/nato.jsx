import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7wfo1l2j.css';
import '../../css/p/pai7wqhll.css';
import '../../css/d/dntj9sk8v.css';
import '../../css/l/liox7mf_o.css';
import '../../css/x/x4jt87b5a.css';
import '../../css/g/gkle8ybyb.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7wfo1l2j"/><path class="pai7wqhll"/><path class="dntj9sk8v"/><path class="liox7mf_o"/><path class="x4jt87b5a"/><path class="gkle8ybyb"/>`,
		"fallback": "tabler-flags:nato",
	});
}

export default Component;
