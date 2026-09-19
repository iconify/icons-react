import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewqvwvboj.css';
import '../../css/s/s59_s2b3k.css';
import '../../css/u/uzrftzatq.css';
import '../../css/z/zzxdhbbgb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewqvwvboj"/><path class="s59_s2b3k"/><path class="uzrftzatq"/><path class="zzxdhbbgb"/>`,
		"fallback": "devicon:opentelemetry-wordmark",
	});
}

export default Component;
