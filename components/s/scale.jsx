import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im4sm4brc.css';
import '../../css/v/vyso5givu.css';
import '../../css/f/fb1jcdm6g.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im4sm4brc"/><path class="vyso5givu"/><path class="fb1jcdm6g"/>`,
		"fallback": "gis:scale",
	});
}

export default Component;
