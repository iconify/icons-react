import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5xe2hu9u.css';
import '../../css/q/qxn5niypj.css';
import '../../css/m/mrnim2byg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5xe2hu9u"/><path class="qxn5niypj"/><path class="mrnim2byg"/>`,
		"fallback": "energy-icons:paint-roller-48-bold",
	});
}

export default Component;
