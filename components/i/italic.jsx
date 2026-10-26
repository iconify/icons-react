import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srt553b7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srt553b7w"/>`,
		"fallback": "doodle-icons:italic",
	});
}

export default Component;
