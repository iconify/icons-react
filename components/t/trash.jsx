import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6gtnxgyh.css';
import '../../css/g/gsv3t-buj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6gtnxgyh"/><path class="gsv3t-buj"/>`,
		"fallback": "nimbus:trash",
	});
}

export default Component;
