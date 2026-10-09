import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilgp3hg6a.css';
import '../../css/a/atyhtibwr.css';
import '../../css/w/wrhqn4baz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilgp3hg6a"/><path class="atyhtibwr"/><path class="wrhqn4baz"/>`,
		"fallback": "energy-icons:mirror-48",
	});
}

export default Component;
