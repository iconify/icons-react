import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv75wz1iz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv75wz1iz"/>`,
		"fallback": "selfhst:mattermost-dark",
	});
}

export default Component;
