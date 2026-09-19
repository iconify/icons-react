import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx1pw_-qf.css';
import '../../css/g/g5xqtsbzl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGmEns5cJB" class="nx1pw_-qf"/></defs><use href="#SVGmEns5cJB"/><use href="#SVGmEns5cJB"/><path class="g5xqtsbzl"/>`,
		"fallback": "carbon:new-tab",
	});
}

export default Component;
