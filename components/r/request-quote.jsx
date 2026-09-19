import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tawnownbk.css';
import '../../css/l/lha6blb2v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tawnownbk"/><path class="lha6blb2v"/>`,
		"fallback": "carbon:request-quote",
	});
}

export default Component;
