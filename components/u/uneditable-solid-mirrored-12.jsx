import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txc949jby.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txc949jby"/>`,
		"fallback": "fluent-mdl2:uneditable-solid-mirrored-12",
	});
}

export default Component;
