import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-93wacki.css';
import '../../css/p/p5711fb-v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-93wacki"/><path class="p5711fb-v"/>`,
		"fallback": "energy-icons:tide-high-20",
	});
}

export default Component;
