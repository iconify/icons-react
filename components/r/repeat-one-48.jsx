import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5hoe7b8s.css';
import '../../css/e/ea0j21kww.css';
import '../../css/v/ve4jb3chp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5hoe7b8s"/><path class="ea0j21kww"/><path class="ve4jb3chp"/>`,
		"fallback": "energy-icons:repeat-one-48",
	});
}

export default Component;
