import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/k/kiyl4qh_p.css';
import '../../css/h/hr1ia5b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="kiyl4qh_p"/><path class="hr1ia5b3w"/></g>`,
		"fallback": "tabler:mood-tongue-wink-2",
	});
}

export default Component;
