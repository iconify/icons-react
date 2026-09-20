import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mi-mpqbpu.css';
import '../../css/i/il17kbbxg.css';
import '../../css/e/ehq3u9bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mi-mpqbpu"/><rect class="il17kbbxg"/><path class="ehq3u9bfs"/></g>`,
		"fallback": "lucide:notepad-text",
	});
}

export default Component;
