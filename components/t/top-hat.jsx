import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/symc4kb7p.css';
import '../../css/n/n7ijnpbfo.css';
import '../../css/f/fna-v2b9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="symc4kb7p"/><path class="n7ijnpbfo"/><path class="fna-v2b9n"/></g>`,
		"fallback": "fluent-emoji-flat:top-hat",
	});
}

export default Component;
