import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/dbewce8vc.css';
import '../../css/n/n6chi_btj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="dbewce8vc"/><path class="n6chi_btj"/></g>`,
		"fallback": "doodle-icons:scroll",
	});
}

export default Component;
