import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va6jvlbzo.css';
import '../../css/y/y0kw6z96g.css';
import '../../css/d/dgq02yorw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va6jvlbzo"/><path class="y0kw6z96g"/><path class="dgq02yorw"/>`,
		"fallback": "devicon:nodered",
	});
}

export default Component;
