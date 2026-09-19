import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/ku8judboj.css';
import '../../css/o/o26dknb6b.css';
import '../../css/l/lmj8o9bfu.css';
import '../../css/i/ifpzbub1f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="ku8judboj"/><path class="o26dknb6b"/><rect transform="rotate(-45 5.071 33.071)" class="lmj8o9bfu"/><path class="ifpzbub1f"/></g>`,
		"fallback": "icon-park:sandwich-one",
	});
}

export default Component;
