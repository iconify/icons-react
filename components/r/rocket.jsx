import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay0q8wp0f.css';
import '../../css/v/v6k4kxbiv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay0q8wp0f"/><path class="v6k4kxbiv"/>`,
		"fallback": "nimbus:rocket",
	});
}

export default Component;
