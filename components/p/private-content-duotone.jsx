import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lbvlq5mem.css';
import '../../css/t/t7hx4fz_v.css';
import '../../css/r/rslfarb6v.css';
import '../../css/h/h9hstt17t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="lbvlq5mem"/><path class="t7hx4fz_v"/></g><path class="rslfarb6v"/><path class="h9hstt17t"/>`,
		"fallback": "stash:private-content-duotone",
	});
}

export default Component;
