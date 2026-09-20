import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg4hqzbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg4hqzbwq"/>`,
		"fallback": "meteor-icons:visual-studio-code",
	});
}

export default Component;
