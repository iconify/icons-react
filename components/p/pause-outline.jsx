import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjjfaz5bu.css';
import '../../css/b/b93j9cbjr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjjfaz5bu"/><path class="b93j9cbjr"/>`,
		"fallback": "carbon:pause-outline",
	});
}

export default Component;
