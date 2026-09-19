import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9f10nboz.css';
import '../../css/y/y3cighb0v.css';
import '../../css/w/weadfjyaa.css';
import '../../css/m/mvl3ubbuj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9f10nboz"/><path class="y3cighb0v"/><path class="weadfjyaa"/><path class="mvl3ubbuj"/></g>`,
		"fallback": "fluent-emoji-flat:mount-fuji",
	});
}

export default Component;
