import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b611vubcy.css';
import '../../css/f/fg-wh3qoy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b611vubcy"/><path class="fg-wh3qoy"/>`,
		"fallback": "energy-icons:seabed-survey-48-bold",
	});
}

export default Component;
