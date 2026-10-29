import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al-4-0btz.css';
import '../../css/t/twbohlb9d.css';
import '../../css/l/l9h-wybvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al-4-0btz wm-k"/><path class="twbohlb9d wm-a"/><path class="l9h-wybvf wm-k"/>`,
		"fallback": "withicons-bauhaus:tombstone",
	});
}

export default Component;
