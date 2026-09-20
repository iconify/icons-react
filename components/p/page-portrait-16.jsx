import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5fc605jj.css';
import '../../css/v/vrumybbkb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s5fc605jj"/><path clip-rule="evenodd" class="vrumybbkb"/>`,
		"fallback": "qlementine-icons:page-portrait-16",
	});
}

export default Component;
