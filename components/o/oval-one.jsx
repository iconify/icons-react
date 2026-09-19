import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahrb5lbeq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="ahrb5lbeq"/>`,
		"fallback": "icon-park:oval-one",
	});
}

export default Component;
