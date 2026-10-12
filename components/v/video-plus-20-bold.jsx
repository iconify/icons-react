import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egmxbdbsh.css';
import '../../css/u/ur58omuhl.css';
import '../../css/x/xwdhawfba.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egmxbdbsh"/><path class="ur58omuhl"/><path class="xwdhawfba"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:video-plus-20-bold",
	});
}

export default Component;
