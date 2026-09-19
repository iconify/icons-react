import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/h5zcsbbql.css';
import '../../css/r/rezumnbfj.css';
import '../../css/p/pizftqu3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="h5zcsbbql"/><path class="rezumnbfj"/><path class="pizftqu3k"/></g>`,
		"fallback": "icon-park:thunderbolt",
	});
}

export default Component;
