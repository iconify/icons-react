import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwoi71b8l.css';
import '../../css/j/jql0-8iqc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwoi71b8l"/><path class="jql0-8iqc"/>`,
		"fallback": "energy-icons:pipe-reducer-20",
	});
}

export default Component;
