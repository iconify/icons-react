import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko0p_sozw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko0p_sozw"/>`,
		"fallback": "icomoon-free:rss",
	});
}

export default Component;
