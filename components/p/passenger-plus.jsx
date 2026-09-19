import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byk5dy4fd.css';
import '../../css/b/b4d3mc68f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byk5dy4fd"/><path class="b4d3mc68f"/>`,
		"fallback": "carbon:passenger-plus",
	});
}

export default Component;
