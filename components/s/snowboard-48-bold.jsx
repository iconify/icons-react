import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-75ddbox.css';
import '../../css/g/gva8st1tu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-75ddbox"/><path class="gva8st1tu"/>`,
		"fallback": "energy-icons:snowboard-48-bold",
	});
}

export default Component;
