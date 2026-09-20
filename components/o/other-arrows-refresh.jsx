import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdx3qo68o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdx3qo68o"/>`,
		"fallback": "streamline-block:other-arrows-refresh",
	});
}

export default Component;
