import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz28_8bzx.css';
import '../../css/b/b93j9cbjr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz28_8bzx"/><path class="b93j9cbjr"/>`,
		"fallback": "carbon:play-outline",
	});
}

export default Component;
