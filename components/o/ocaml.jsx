import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsfdawbzr.css';
import '../../css/s/sghc7ijwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsfdawbzr"/><path class="sghc7ijwi"/>`,
		"fallback": "material-icon-theme:ocaml",
	});
}

export default Component;
