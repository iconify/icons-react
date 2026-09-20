import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwu3gcbrl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwu3gcbrl"/>`,
		"fallback": "streamline-flex:label-folder-tag-remix",
	});
}

export default Component;
