import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3othib8i.css';
import '../../css/b/b26krwbpl.css';
import '../../css/t/t1mey7b0j.css';
import '../../css/c/cwuyrvbdo.css';
import '../../css/g/gik-1umgx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3othib8i"/><path class="b26krwbpl"/><path class="t1mey7b0j"/><path class="cwuyrvbdo"/><path class="gik-1umgx"/>`,
		"fallback": "energy-icons:island-20",
	});
}

export default Component;
