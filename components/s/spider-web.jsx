import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eyuign3qk.css';
import '../../css/h/hg9d3hbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eyuign3qk"/><path class="hg9d3hbmt"/></g>`,
		"fallback": "lucide-lab:spider-web",
	});
}

export default Component;
