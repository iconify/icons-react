import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2v4it5to.css';
import '../../css/v/velavw33g.css';
import '../../css/k/krzgvzbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2v4it5to"/><path class="velavw33g"/><path class="krzgvzbvy"/>`,
		"fallback": "stash:private-content-light",
	});
}

export default Component;
