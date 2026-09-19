import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gac48jb7z.css';
import '../../css/n/n_m9vgi5i.css';
import '../../css/r/r48c3wd-j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gac48jb7z"/><path class="n_m9vgi5i"/><path class="r48c3wd-j"/>`,
		"fallback": "carbon:iot-platform",
	});
}

export default Component;
