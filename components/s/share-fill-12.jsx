import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfxlexb0t.css';
import '../../css/b/bn8wa4tsk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfxlexb0t"/><path class="bn8wa4tsk"/>`,
		"fallback": "garden:share-fill-12",
	});
}

export default Component;
