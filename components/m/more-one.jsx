import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-a1t9yth.css';
import '../../css/m/mprl4mbnb.css';
import '../../css/c/chpyfs2is.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="c-a1t9yth"/><circle class="mprl4mbnb"/><circle class="chpyfs2is"/>`,
		"fallback": "icon-park-outline:more-one",
	});
}

export default Component;
