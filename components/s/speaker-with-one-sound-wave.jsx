import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwlm6_lai.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwlm6_lai"/>`,
		"fallback": "dinkie-icons:speaker-with-one-sound-wave",
	});
}

export default Component;
