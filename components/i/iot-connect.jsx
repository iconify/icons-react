import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gac48jb7z.css';
import '../../css/b/butntgbln.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gac48jb7z"/><path class="butntgbln"/>`,
		"fallback": "carbon:iot-connect",
	});
}

export default Component;
