import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq-whqbyl.css';
import '../../css/n/nsw7x4gvs.css';
import '../../css/e/epapbpbyt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq-whqbyl"/><path class="nsw7x4gvs"/><path class="epapbpbyt"/>`,
		"fallback": "thesvg-color:pg-back-web-light",
	});
}

export default Component;
