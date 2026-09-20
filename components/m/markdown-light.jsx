import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a89cky7-t.css';
import '../../css/a/ajlhn96ks.css';

const viewBox = {"width":208,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a89cky7-t"/><path class="ajlhn96ks"/>`,
		"fallback": "thesvg-color:markdown-light",
	});
}

export default Component;
