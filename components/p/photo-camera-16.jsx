import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n45vuo57q.css';
import '../../css/s/spjy6sbgm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n45vuo57q"/><path clip-rule="evenodd" class="spjy6sbgm"/>`,
		"fallback": "qlementine-icons:photo-camera-16",
	});
}

export default Component;
