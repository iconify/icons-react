import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfmpvh6sc.css';
import '../../css/g/gr7b__mxd.css';
import '../../css/y/yh-bu38fx.css';
import '../../css/t/tyzbf5qjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfmpvh6sc wm-k"/><path class="gr7b__mxd wm-k"/><path class="wm-a yh-bu38fx"/><path class="tyzbf5qjt wm-a"/>`,
		"fallback": "withicons-bauhaus:newspaper",
	});
}

export default Component;
