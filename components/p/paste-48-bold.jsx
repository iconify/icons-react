import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adm1b9bzj.css';
import '../../css/s/sizbx91ge.css';
import '../../css/i/iwbhkacly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adm1b9bzj"/><path class="sizbx91ge"/><path class="iwbhkacly"/>`,
		"fallback": "energy-icons:paste-48-bold",
	});
}

export default Component;
