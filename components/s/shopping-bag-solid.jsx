import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg1y38x-a.css';
import '../../css/p/p9aucsbot.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 jg1y38x-a"/><path class="clr-i-solid clr-i-solid-path-2 p9aucsbot"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:shopping-bag-solid",
	});
}

export default Component;
