import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t521r7bww.css';
import '../../css/j/jd8qxobse.css';
import '../../css/f/ftkgzh3ob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t521r7bww"/><path class="jd8qxobse"/><path class="ftkgzh3ob"/>`,
		"fallback": "solar:star-rings-outline",
	});
}

export default Component;
