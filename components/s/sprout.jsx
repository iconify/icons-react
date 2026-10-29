import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyaj6wb9r.css';
import '../../css/g/gnxu1ts-s.css';
import '../../css/p/pqyhd5p9m.css';
import '../../css/b/bppa-kbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k xyaj6wb9r"/><path class="gnxu1ts-s wm-k"/><path class="pqyhd5p9m wm-k"/><path class="bppa-kbot wm-a"/>`,
		"fallback": "withicons-bauhaus:sprout",
	});
}

export default Component;
