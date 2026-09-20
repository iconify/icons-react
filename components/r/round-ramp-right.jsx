import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/k/kdf_wr.css';
import '../../css/k/kmfqat.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c kdf_wr"/><path class="a0m25c kmfqat"/>`,
		"fallback": "line-md:round-ramp-right",
	});
}

export default Component;
