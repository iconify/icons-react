import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0llrhkep.css';
import '../../css/p/pbyqebu6j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0llrhkep"/><path class="pbyqebu6j"/>`,
		"fallback": "qlementine-icons:photo-camera-crossed-32",
	});
}

export default Component;
