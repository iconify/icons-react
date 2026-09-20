import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsfwvcb6a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsfwvcb6a"/>`,
		"fallback": "streamline:interface-presentation-podium-work-desk-notes-company-presentation-office-podium-microphone",
	});
}

export default Component;
