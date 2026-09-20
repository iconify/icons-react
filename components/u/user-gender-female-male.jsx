import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwsn9h_qk.css';
import '../../css/a/asuq80bea.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwsn9h_qk"/><path class="asuq80bea"/>`,
		"fallback": "streamline-pixel:user-gender-female-male",
	});
}

export default Component;
