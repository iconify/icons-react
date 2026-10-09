import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mixyt5cvw.css';
import '../../css/c/c-gfqebqa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mixyt5cvw"/><path class="c-gfqebqa"/>`,
		"fallback": "energy-icons:rivet-20-bold",
	});
}

export default Component;
