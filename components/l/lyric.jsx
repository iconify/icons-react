import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zczsir0pe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zczsir0pe"/>`,
		"fallback": "material-icon-theme:lyric",
	});
}

export default Component;
