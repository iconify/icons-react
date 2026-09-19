import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj7nlvbtl.css';
import '../../css/y/ygp1fekrd.css';
import '../../css/f/fedgzjg7h.css';
import '../../css/q/ql6jgbo1j.css';
import '../../css/m/m9d-ipyoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj7nlvbtl"/><path class="ygp1fekrd"/><circle class="fedgzjg7h"/><path class="ql6jgbo1j"/><path class="m9d-ipyoj"/>`,
		"fallback": "gcp:profiler",
	});
}

export default Component;
