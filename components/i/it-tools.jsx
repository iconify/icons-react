import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re9t7ccrz.css';
import '../../css/x/xd65xdbvb.css';

const viewBox = {"width":726,"height":726};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re9t7ccrz"/><path class="xd65xdbvb"/>`,
		"fallback": "thesvg-color:it-tools",
	});
}

export default Component;
