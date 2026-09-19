import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tj18s5bgc.css';
import '../../css/j/j-qqu6bhe.css';
import '../../css/s/sf6q5ib2a.css';
import '../../css/h/hjxxar72n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tj18s5bgc"/><path class="j-qqu6bhe"/><path class="sf6q5ib2a"/><path class="hjxxar72n"/></g>`,
		"fallback": "fluent-emoji-flat:oil-drum",
	});
}

export default Component;
