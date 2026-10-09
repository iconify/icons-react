import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/w/wsyfe-e9b.css';
import '../../css/e/e87twg6ap.css';
import '../../css/t/t0jh0bbtf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="wsyfe-e9b"/><path class="e87twg6ap"/><path class="t0jh0bbtf"/>`,
		"fallback": "energy-icons:volleyball-48-bold",
	});
}

export default Component;
