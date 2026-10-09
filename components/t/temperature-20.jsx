import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il0bcibcq.css';
import '../../css/z/z8-myrbjy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il0bcibcq"/><path class="z8-myrbjy"/>`,
		"fallback": "energy-icons:temperature-20",
	});
}

export default Component;
