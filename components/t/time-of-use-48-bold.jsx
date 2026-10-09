import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghq0elqau.css';
import '../../css/f/fzoldhk-f.css';
import '../../css/f/fz14dobdd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghq0elqau"/><path class="fzoldhk-f"/><path class="fz14dobdd"/>`,
		"fallback": "energy-icons:time-of-use-48-bold",
	});
}

export default Component;
