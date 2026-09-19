import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ievdxcc9u.css';
import '../../css/x/xcuj9xz1r.css';
import '../../css/c/cfvelzb1x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ievdxcc9u"/><path class="xcuj9xz1r"/><path class="cfvelzb1x"/>`,
		"fallback": "ion:layers",
	});
}

export default Component;
