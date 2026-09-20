import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c41qsrb5t.css';
import '../../css/l/ld54_pb1a.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="c41qsrb5t"/><path class="ld54_pb1a"/><path class="a4lo4k5_r"/></g>`,
		"fallback": "marketeq:question",
	});
}

export default Component;
