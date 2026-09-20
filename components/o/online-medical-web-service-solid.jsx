import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtpmbuzqw.css';
import '../../css/a/afv8obb9x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtpmbuzqw"/><path class="afv8obb9x"/>`,
		"fallback": "streamline:online-medical-web-service-solid",
	});
}

export default Component;
