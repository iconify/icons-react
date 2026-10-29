import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu4speh-f.css';
import '../../css/w/w89bx5biq.css';
import '../../css/q/qtghocgwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu4speh-f wm-k"/><path class="w89bx5biq wm-a"/><path class="qtghocgwn wm-k"/>`,
		"fallback": "withicons-bauhaus:video-camera",
	});
}

export default Component;
