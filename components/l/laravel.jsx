import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf3axfyug.css';
import '../../css/i/ikmyx1evo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hf3axfyug"/><path clip-rule="evenodd" class="ikmyx1evo"/>`,
		"fallback": "devicon-plain:laravel",
	});
}

export default Component;
