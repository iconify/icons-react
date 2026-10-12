import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njdpvjbzg.css';
import '../../css/f/fmukgjbig.css';
import '../../css/j/jlr84fbeb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njdpvjbzg"/><path class="fmukgjbig"/><path class="jlr84fbeb"/>`,
		"fallback": "energy-icons:pig-20",
	});
}

export default Component;
