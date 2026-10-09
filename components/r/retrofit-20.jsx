import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7juawdew.css';
import '../../css/t/texugffgg.css';
import '../../css/e/euemi1brz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7juawdew"/><path class="texugffgg"/><path class="euemi1brz"/>`,
		"fallback": "energy-icons:retrofit-20",
	});
}

export default Component;
