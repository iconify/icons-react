import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zemhzbc5a.css';
import '../../css/r/r6fwiknyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zemhzbc5a"/><path class="r6fwiknyu"/>`,
		"fallback": "streamline-ultimate:office-file-text-bold",
	});
}

export default Component;
