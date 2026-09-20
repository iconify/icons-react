import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me00cjb6q.css';
import '../../css/r/r4-esbb-w.css';
import '../../css/y/yq5xc3f-s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me00cjb6q"/><path class="r4-esbb-w"/><path class="yq5xc3f-s"/>`,
		"fallback": "material-icon-theme:python-misc",
	});
}

export default Component;
