import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu4speh-f.css';
import '../../css/w/w89bx5biq.css';
import '../../css/l/l5bbw4b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu4speh-f wm-k"/><path class="w89bx5biq wm-a"/><path class="l5bbw4b8q wm-a"/>`,
		"fallback": "withicons-bauhaus:video-call",
	});
}

export default Component;
