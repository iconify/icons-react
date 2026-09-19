import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/w/wtbqjwbif.css';
import '../../css/c/c4bl7z6jp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="wtbqjwbif"/><path class="c4bl7z6jp"/></g>`,
		"fallback": "icon-park:vest",
	});
}

export default Component;
