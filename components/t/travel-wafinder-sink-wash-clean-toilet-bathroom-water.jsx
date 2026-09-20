import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdmf3g-ko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdmf3g-ko"/>`,
		"fallback": "streamline:travel-wafinder-sink-wash-clean-toilet-bathroom-water",
	});
}

export default Component;
