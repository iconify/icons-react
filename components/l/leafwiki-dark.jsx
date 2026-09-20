import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjbeumbky.css';
import '../../css/c/ckze4557m.css';
import '../../css/o/o4qlo11nz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjbeumbky"/><path class="ckze4557m"/><path class="o4qlo11nz"/>`,
		"fallback": "selfhst:leafwiki-dark",
	});
}

export default Component;
