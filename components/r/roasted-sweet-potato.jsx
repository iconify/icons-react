import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0ifmybaz.css';
import '../../css/x/xcks7db_v.css';
import '../../css/c/cb1_2acye.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0ifmybaz"/><path class="xcks7db_v"/><path class="cb1_2acye"/></g>`,
		"fallback": "fluent-emoji-flat:roasted-sweet-potato",
	});
}

export default Component;
