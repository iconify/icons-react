import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tav14-bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tav14-bwc"/>`,
		"fallback": "vadivam:voicemail",
	});
}

export default Component;
