import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv5gx-44j.css';
import '../../css/s/sobo_lk1b.css';
import '../../css/h/h33hifd-b.css';
import '../../css/i/i69id4bah.css';
import '../../css/o/ooiwd4u1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv5gx-44j"/><path class="sobo_lk1b"/><path class="h33hifd-b"/><path class="i69id4bah"/><path class="ooiwd4u1m"/>`,
		"fallback": "selfhst:microsoft-outlook-light",
	});
}

export default Component;
