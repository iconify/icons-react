import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmzp2srzw.css';
import '../../css/a/avn_ef2yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jmzp2srzw"/><path class="avn_ef2yx"/>`,
		"fallback": "material-icon-theme:verdaccio",
	});
}

export default Component;
