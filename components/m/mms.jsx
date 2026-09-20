import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d50lqeb2v.css';
import '../../css/b/b8ii2dbhb.css';

const viewBox = {"width":1000,"height":327.084};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d50lqeb2v"/><path class="b8ii2dbhb"/>`,
		"fallback": "thesvg-color:mms",
	});
}

export default Component;
