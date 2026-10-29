import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkjcn8v7s.css';
import '../../css/z/z-nn-ub9t.css';
import '../../css/z/z75xktbwz.css';
import '../../css/w/wv7vsdyak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkjcn8v7s wm-a"/><path class="wm-k z-nn-ub9t"/><path class="wm-k z75xktbwz"/><path class="wm-k wv7vsdyak"/>`,
		"fallback": "withicons-bauhaus:network",
	});
}

export default Component;
