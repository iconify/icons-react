import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncq58objw.css';
import '../../css/a/a9-2q4bgg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncq58objw"/><path class="a9-2q4bgg"/>`,
		"fallback": "energy-icons:seaweed-20",
	});
}

export default Component;
