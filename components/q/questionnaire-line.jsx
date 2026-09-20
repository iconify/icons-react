import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzg21tuzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzg21tuzh"/>`,
		"fallback": "ri:questionnaire-line",
	});
}

export default Component;
