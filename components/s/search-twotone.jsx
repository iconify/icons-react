import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/q/qf4zap.css';
import '../../css/o/o5a9uc.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-40.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew qf4zap"/><path class="iw1iew o5a9uc"/>`,
		"fallback": "line-md:search-twotone",
	});
}

export default Component;
