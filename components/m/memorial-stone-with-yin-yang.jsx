import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hptsw6dqh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hptsw6dqh"/>`,
		"fallback": "pinhead:memorial-stone-with-yin-yang",
	});
}

export default Component;
