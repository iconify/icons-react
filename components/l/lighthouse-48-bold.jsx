import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rquh9bckn.css';
import '../../css/z/zembkqbot.css';
import '../../css/o/ok1e7zbnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rquh9bckn"/><path class="zembkqbot"/><path class="ok1e7zbnq"/>`,
		"fallback": "energy-icons:lighthouse-48-bold",
	});
}

export default Component;
