import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aecai_kku.css';
import '../../css/g/g-d1ckdau.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aecai_kku"/><path class="g-d1ckdau"/>`,
		"fallback": "thesvg-color:nhibernate",
	});
}

export default Component;
