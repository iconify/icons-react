import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l95p6hgdb.css';
import '../../css/x/xea6o-oef.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l95p6hgdb"/><path class="xea6o-oef"/>`,
		"fallback": "devicon:photoshop",
	});
}

export default Component;
